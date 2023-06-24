import { useQuery, useInfiniteQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";
import { OfficerPaginator } from "@type/index";

export function useOfficers(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.OFFICERS_LIST, params],
    () => client.officers.get(params),
    {
      ...options,
    }
  );

  return {
    // @ts-ignore
    officers: data?.data ?? [],
    isLoading,
    error,
  };
}

export function useOfficerType(params?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.OFFICERS_LIST_NEW, params],
    () => client.officers.getType(params)
  );

  return {
    // @ts-ignore
    items: data?.data ?? [],
    isLoading,
    error,
  };
}

export function useOfficersGetBySlug(params?: any) {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<OfficerPaginator, Error>(
    [API_ENDPOINTS.OFFICERS_LIST_NEW, params],
    () => client.officers.getBySlug(params),
    {
      // ...options,
      getNextPageParam: ({ currentPage, last_page }) =>
        last_page > currentPage && { page: currentPage + 1 },
    }
  );

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    // @ts-ignore
    items: data?.pages?.flatMap((page) => page?.data?.data ?? []) ?? [],
    isLoading,
    error,
    isLoadingMore: isFetchingNextPage,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
}
