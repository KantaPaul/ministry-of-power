import React from "react";
import SinglePost from "@components/single/Index";
import Banner from "@components/banner/Banner";
export { getStaticProps, getStaticPaths } from "@framework/ssr/news.power.ssr";

const NewsSingle = ({ post, posts }: any) => {
  return (
    <>
      <Banner
        innerBannerBgImg={"/assets/img/inner-banner.png"}
        tag="MPEMR"
        title="Electricity Department"
        subTitle="Our latest news"
      />
      <SinglePost post={post} posts={posts} meta="news" />
    </>
  );
};

export default NewsSingle;
