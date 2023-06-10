import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useLatestNews(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.LATEST_NEWS, params],
    () => client.latestNews.all(params),
    {
      ...options,
    }
  );

  return {
    latestNews: data ?? [],
    isLoading,
    error,
  };
}
