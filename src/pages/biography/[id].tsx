import type { InferGetStaticPropsType } from "next";
import React from "react";
import Banner from "@components/banner/Banner";
import { Biography } from "@type/index";
import Seo from "@components/Seo";
import { isEmpty } from "lodash";
import { Routes } from "@config/routes";
import BiographyContent from "@components/biography/Content";
import {
  getStaticProps,
  getStaticPaths,
} from "@framework/ssr/biography.single.ssr";
export { getStaticProps, getStaticPaths };

const BiographySingle: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ biography }: any) => {
  const { data }: { data: Biography } = biography;
  const Url = `${process.env.NEXT_PUBLIC_SITE_URL}${Routes?.biography(
    data?.id?.toString() as string
  )}`;

  return (
    <>
      <Seo
        title={data?.short_description}
        url={Url}
        images={!isEmpty(data?.image) ? [data?.image] : []}
      />

      <Banner
        innerBannerBgImg={"/assets/img/inner-banner.png"}
        tag="MPEMR"
        title={data?.title_en}
        subTitle="Biography"
      />

      <BiographyContent data={data} />
    </>
  );
};

export default BiographySingle;
