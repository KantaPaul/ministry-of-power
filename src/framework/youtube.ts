import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useYoutubeVideos() {
  const { data, isLoading, error } = useQuery({
    queryKey: [API_ENDPOINTS.YOUTUBE],
    queryFn: () => client.youtube.get(),
    refetchOnWindowFocus: false,
  });

  return {
    // @ts-ignore
    videos: data?.items ?? [],
    isLoading,
    error,
  };
}
