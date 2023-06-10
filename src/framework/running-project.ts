import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useRunningProject(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.RUNNING_PROJECT, params],
    () => client.runningProject.get(params),
    {
      ...options,
    }
  );

  return {
    // @ts-ignore
    runningProject: data?.data ?? {},
    isLoading,
    error,
  };
}
