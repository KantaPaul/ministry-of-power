import type { GetStaticProps } from "next";
import { dehydrate } from "react-query/hydration";
import { QueryClient } from "react-query";
import client from "@framework/client/index";
import { Biography } from "@type/index";

// This function gets called at build time
type ParsedQueryParams = {
  id: string;
};
export const getStaticPaths = async () => {
  const data = await client.biography.all();

  //   @ts-ignore
  const paths = data?.data?.flatMap((biography: Biography) => {
    return {
      params: {
        id: biography?.id?.toString(),
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};
type PageProps = {
  biography: Biography;
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params }) => {
  const { id } = params!; //* we know it's required because of getStaticPaths

  const queryClient = new QueryClient();

  try {
    const biography = await client.biography.all({ id: id?.toString() });
    return {
      props: {
        biography,
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
