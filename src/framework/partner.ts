import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function usePartners(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.PARTNER_LIST, params],
    () => client.partner.all(params),
    {
      ...options,
    }
  );

  return {
    partners: data ?? [],
    isLoading,
    error,
  };
}
