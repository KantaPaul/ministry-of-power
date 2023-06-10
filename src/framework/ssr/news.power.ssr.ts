import type { GetStaticProps } from "next";
import { dehydrate } from "react-query/hydration";
import { QueryClient } from "react-query";
import client from "@framework/client/index";

// This function gets called at build time
type ParsedQueryParams = {
  id: string;
};
export const getStaticPaths = async () => {
  const data = await client.powerDivisionNews.all();

  //   @ts-ignore
  const paths = data?.data?.flatMap((news: any) => {
    return {
      params: {
        // news: "news",
        // news_type: "power",
        id: news?.id?.toString(),
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
  const { id } = params!; //* we know it's required because of getStaticPaths

  const queryClient = new QueryClient();

  try {
    const post = await client.newsPowerSingle.get(id?.toString());
    const posts = await client.powerDivisionNews.all();
    return {
      props: {
        post,
        posts,
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
