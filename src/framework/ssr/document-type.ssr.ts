import type { GetStaticProps } from "next";
import { dehydrate } from "react-query/hydration";
import { QueryClient } from "react-query";
import client from "@framework/client/index";
import { Documentation } from "@type/index";

// This function gets called at build time
type ParsedQueryParams = {
  slug: string;
};
export const getStaticPaths = async () => {
  const data = await client.documentInfo.get({ document_type: "all" });

  //   @ts-ignore
  const paths = data?.data?.flatMap((document: any) => {
    return {
      params: {
        slug: document?.slug?.toString(),
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};
type PageProps = {
  document: any;
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params }) => {
  const { slug } = params!; //* we know it's required because of getStaticPaths

  const queryClient = new QueryClient();

  try {
    const document = await client.documentInfo.get({ slug: slug?.toString() });
    return {
      props: {
        // @ts-ignore
        document: document?.data?.map((doc: Documentation, index: number) => ({
          ...doc,
          docID: index + 1,
        })),
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
