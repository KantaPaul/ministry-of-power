import React from "react";
import SinglePost from "@components/single/Index";
import Banner from "@components/banner/Banner";
export { getStaticPaths, getStaticProps } from "@framework/ssr/news.energy.ssr";

const NewsSingle = ({ post, posts }: any) => {
  return (
    <>
      <Banner
        innerBannerBgImg={"/assets/img/inner-banner.png"}
        tag="MPEMR"
        title="Energy and Mineral Resources Division"
        subTitle="Our latest news"
      />
      <SinglePost post={post} posts={posts} meta="news" />
    </>
  );
};

export default NewsSingle;
