import { usePowerDivisionOfficeNews } from "@framework/power-division-news";
import Pagination from "@components/ui/Pagination";
import { useState, useCallback, useEffect } from "react";
import NewsCard from "@components/news/NewsCard";
import { useRouter } from "next/router";
import Banner from "@components/banner/Banner";
export { getStaticProps } from "@framework/ssr/news.power.index.ssr";
import Loader from "@components/Loader";
import Alert from "@components/Alert";

const NewsPowerPostsList = () => {
  const [page, setPage] = useState("1");
  const router = useRouter();
  const {
    powerOfficeNews: powerNews,
    isLoading,
    error,
  } = usePowerDivisionOfficeNews({
    limit: 9,
    page,
  });

  const handlePagination = useCallback(
    (current: number) => {
      router.push(`?page=${current.toString()}`);
    },
    [router?.query]
  );

  useEffect(() => {
    setPage(router?.query?.page as string);
  }, [router?.query]);

  if (isLoading) {
    return (
      <div className="py-[60px] md:py-[120px] flex justify-center">
        <div className="content_body">
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-40">
        <div className="container mx-auto">
          {/* @ts-ignore */}
          <Alert type="error" message={error?.message} />
        </div>
      </div>
    );
  }

  return (
    <>
      <Banner
        innerBannerBgImg={"/assets/img/inner-banner.png"}
        tag="MPEMR"
        title="Electricity Department"
        subTitle="Our latest news"
      />
      <div className="pb-[120px] pt-[90px]">
        <div className="content_body">
          <NewsCard news={powerNews} meta="office" />
          {/* @ts-ignore */}
          {!!powerNews?.data?.pagination.total && (
            <div className="mt-11">
              <Pagination
                // @ts-ignore
                total={powerNews?.data?.pagination.total}
                // @ts-ignore
                current={powerNews?.data?.pagination.currentPage}
                // @ts-ignore
                pageSize={powerNews?.data?.pagination.perPage}
                onChange={handlePagination}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsPowerPostsList;
