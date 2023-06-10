import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useEService(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.E_SERVICE, params],
    () => client.e_service.all(params),
    {
      ...options,
    }
  );

  return {
    // @ts-ignore
    eService: data?.data ?? [],
    isLoading,
    error,
  };
}
