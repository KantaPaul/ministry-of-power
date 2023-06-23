// import SideSocial from "@components/common/SideSocial";
import { useMemo } from "react";
import Banner from "@components/banner/Banner";
import { useOfficersGetBySlug } from "@framework/officers";
import OfficerCard from "@components/officers/OfficerCard";
import { isEmpty, isArray } from "lodash";
import { OfficerType } from "@type/index";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import OfficerTabCard from "@components/officers/OfficerTabCard";
export { getStaticProps } from "@framework/ssr/officer.index.ssr";

export default function Officers() {
  const { items, isLoading, error } = useOfficersGetBySlug({
    type: "all",
  });

  const getFirstTwoItems = useMemo(() => {
    return !isEmpty(items) && isArray(items) ? items?.slice(0, 2) : [];
  }, [items]);

  const getAnotherItems = useMemo(() => {
    return !isEmpty(items) && isArray(items) && items?.length > 2
      ? items?.slice(2, items?.length)
      : [];
  }, [items]);

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

  const className = "bg-[#F7F7F7] p-4 lg:p-[3.75rem] rounded-[1.25rem]";

  return (
    <div>
      <Banner
        innerBannerBgImg={"/assets/img/inner-banner.png"}
        tag="MPEMR"
        title="Officers"
        subTitle="Officers Profile"
      />

      {!isEmpty(items) ? (
        <div className="officers-section py-[60px] md:py-[120px]">
          <div className="mb-16">
            <div className="content_body lg:space-y-16 space-y-6">
              {getFirstTwoItems?.map((item: OfficerType, index: number) => {
                return (
                  <div className={className} key={index}>
                    <OfficerCard title={item?.name} slug={item?.slug} />
                  </div>
                );
              })}
              <div className={className}>
                <OfficerTabCard
                  types={getAnotherItems}
                  title="কর্মকর্তাবৃন্দ"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
