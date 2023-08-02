import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useHeaderSlider(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.HEADER_SLIDER, params],
    () => client.headerSlider.all(params),
    {
      ...options,
    }
  );

  return {
    // @ts-ignore
    headerSlider: data?.data ?? [],
    isLoading,
    error,
  };
}
