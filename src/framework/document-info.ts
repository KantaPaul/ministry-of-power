import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useDocumentInfo(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.DOCUMENT_INFO, params],
    () => client.documentInfo.get(params),
    {
      ...options,
    }
  );

  return {
    // @ts-ignore
    documents: data?.data ?? [],
    isLoading,
    error,
  };
}
