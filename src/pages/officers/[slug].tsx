import React from "react";
// import Banner from "@components/banner/Banner";
import { Officers } from "@type/index";
import Officer from "@components/officers/Single";
export {
  getStaticPaths,
  getStaticProps,
} from "@framework/ssr/officer.single.ssr";

const OfficerSingle = ({ officer }: any) => {
  const { data }: { data: Officers } = officer;

  return (
    <>
      {/* <Banner
        innerBannerBgImg={"/assets/img/inner-banner.png"}
        tag="MPEMR"
        title="Officer"
        subTitle={data?.officer_name}
      /> */}

      <Officer data={data} />
    </>
  );
};

export default OfficerSingle;
