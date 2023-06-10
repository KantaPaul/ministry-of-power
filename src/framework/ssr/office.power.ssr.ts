import type { GetStaticProps } from "next";
import { dehydrate } from "react-query/hydration";
import { QueryClient } from "react-query";
import client from "@framework/client/index";

// This function gets called at build time
type ParsedQueryParams = {
  powerSlug: string;
};
export const getStaticPaths = async () => {
  const data = await client.powerDivisionOfficeNews.all();

  //   @ts-ignore
  const paths = data?.data?.flatMap((news: any) => {
    return {
      params: {
        // news: "office",
        // news_type: news?.news_type,
        powerSlug: news?.id?.toString(),
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};
type PageProps = {
  post: any;
  posts: any;
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params }) => {
  const { powerSlug } = params!; //* we know it's required because of getStaticPaths

  const queryClient = new QueryClient();

  try {
    const post = await client.powerDivisionOfficeNews.get(
      powerSlug?.toString()
    );
    const posts = await client.powerDivisionOfficeNews.all();
    return {
      props: {
        posts,
        post,
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
