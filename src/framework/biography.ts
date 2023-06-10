import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useBiography(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.BIOGRAPHY, params],
    () => client.biography.all(params),
    {
      ...options,
    }
  );

  return {
    // @ts-ignore
    biography: data?.data ?? [],
    isLoading,
    error,
  };
}
