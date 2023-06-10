import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useAbout(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.ABOUT_US, params],
    () => client.aboutUs.all(params),
    {
      ...options,
    }
  );

  return {
    // @ts-ignore
    about: data?.data ?? {},
    isLoading,
    error,
  };
}
