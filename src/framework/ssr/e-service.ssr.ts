import type { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.MENU_ITEM, {}],
    ({ queryKey }) => client.menuItem.all(queryKey[1])
  );

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.LATEST_NEWS, {}],
    ({ queryKey }) => client.latestNews.all(queryKey[1])
  );

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.E_SERVICE, {}],
    ({ queryKey }) => client.e_service.all(queryKey[1])
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 120,
  };
};
