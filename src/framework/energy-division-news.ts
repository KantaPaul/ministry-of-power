import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useEnergyDivisionNews(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.ENERGY_DIVISION_NEWS, params],
    () => client.energyDivisionNews.all(params),
    {
      ...options,
    }
  );

  return {
    energyNews: data ?? [],
    isLoading,
    error,
  };
}

export function useEnergyDivisionOfficeNews(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.ENERGY_DIVISION_OFFICE_NEWS, params],
    () => client.energyDivisionOfficeNews.all(params),
    {
      ...options,
    }
  );

  return {
    energyOfficeNews: data ?? [],
    isLoading,
    error,
  };
}
