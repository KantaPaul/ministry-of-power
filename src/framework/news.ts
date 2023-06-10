import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useNewsPower(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.NEWS_POWER, params],
    () => client.newsPowerSingle.get(params),
    {
      ...options,
    }
  );

  return {
    newsPower: data ?? {},
    isLoading,
    error,
  };
}

export function useNewsEnergy(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.NEWS_ENERGY, params],
    () => client.newsEnergySingle.get(params),
    {
      ...options,
    }
  );

  return {
    newsEnergy: data ?? {},
    isLoading,
    error,
  };
}
