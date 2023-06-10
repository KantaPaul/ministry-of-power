import type { GetStaticProps } from "next";
import { dehydrate } from "react-query/hydration";
import { QueryClient } from "react-query";
import client from "@framework/client/index";
import { Officers } from "@type/index";

// This function gets called at build time
type ParsedQueryParams = {
  slug: string;
};
export const getStaticPaths = async () => {
  const data = await client.officers.get();

  //   @ts-ignore
  const paths = data?.data?.flatMap((officer: Officers) => {
    return {
      params: {
        slug: officer?.id?.toString(),
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};
type PageProps = {
  officer: Officers;
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params }) => {
  const { slug } = params!; //* we know it's required because of getStaticPaths

  const queryClient = new QueryClient();

  try {
    const officer = await client.officers.get({ id: slug?.toString() });
    return {
      props: {
        officer,
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
