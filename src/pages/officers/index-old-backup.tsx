// import SideSocial from "@components/common/SideSocial";
import { useEffect, useState, useCallback } from "react";
import Banner from "@components/banner/Banner";
import { useOfficers } from "@framework/officers";
import OfficeMember from "@components/officers/Officers";
import Pagination from "@components/ui/Pagination";
import { useRouter } from "next/router";
import { SearchIcon } from "@components/icons/search";
export { getStaticProps } from "@framework/ssr/news.energy.index.ssr";

export default function Officers() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [page, setPage] = useState("1");
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const { officers, isLoading, error } = useOfficers({
    limit: 8,
    page,
    ...(searchText && {
      search: searchText?.length > 3 ? searchText?.toLowerCase() ?? "" : null,
    }),
  });

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  const handlePagination = useCallback(
    (current: number) => {
      router.push(`?page=${current.toString()}`);
    },
    [router?.query]
  );

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    setPage(router?.query?.page as string);
  }, [router?.query]);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
      if (event.target.value.length > 3 && router?.query?.page !== "1") {
        router.push(`?page=1`);
      }
    },
    [searchText]
  );

  return (
    <div>
      {/* <div className={scrollPosition < 400 ? "hidden" : ""}>
        <div className="fixed bottom-0 right-0 z-50">
          <SideSocial />
        </div>
      </div> */}
      <Banner
        innerBannerBgImg={"/assets/img/inner-banner.png"}
        tag="MPEMR"
        title="Officers"
        subTitle="Officers Profile"
      />

      <div className="officers-section py-[60px] md:py-[120px]">
        <div className="mb-16">
          <div className="content_body">
            <div className="search bg-[#F7F7F7] rounded-[10px] p-[30px] mb-[30px] relative">
              <div className="relative">
                <input
                  className="w-full h-[45px] rounded-md px-[15px] outline-none bg-white placeholder:text-[#8F8F8F] placeholder:font-semibold "
                  type="text"
                  placeholder="Enter more then 3 characters"
                  value={searchText}
                  onChange={handleOnChange}
                />
                <button className="absolute top-[50%] translate-y-[-50%] right-[15px]">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <OfficeMember
          officers={officers?.data}
          isLoading={isLoading}
          error={error}
        />
      </div>

      {/* @ts-ignore */}
      {!!officers?.pagination?.total && (
        <div className="mt-11 mb-32">
          <div className="content_body">
            <Pagination
              // @ts-ignore
              total={officers?.pagination?.total}
              // @ts-ignore
              current={officers?.pagination?.currentPage}
              // @ts-ignore
              pageSize={officers?.pagination?.perPage}
              onChange={handlePagination}
            />
          </div>
        </div>
      )}
    </div>
  );
}
