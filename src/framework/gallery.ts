import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useGallery(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.GALLERY, params],
    () => client.gallery.all(params),
    {
      ...options,
    }
  );

  return {
    gallery: data ?? [],
    isLoading,
    error,
  };
}
