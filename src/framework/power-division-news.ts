import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function usePowerDivisionNews(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.POWER_DIVISION_NEWS, params],
    () => client.powerDivisionNews.all(params),
    {
      ...options,
    }
  );

  return {
    powerNews: data ?? [],
    isLoading,
    error,
  };
}

export function usePowerDivisionOfficeNews(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.POWER_DIVISION_OFFICE_NEWS, params],
    () => client.powerDivisionOfficeNews.all(params),
    {
      ...options,
    }
  );

  return {
    powerOfficeNews: data ?? [],
    isLoading,
    error,
  };
}
