import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

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

export function useOfficersGetBySlug(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.OFFICERS_LIST_NEW, params],
    () => client.officers.getBySlug(params),
    {
      ...options,
    }
  );

  return {
    // @ts-ignore
    items: data?.data ?? [],
    isLoading,
    error,
  };
}