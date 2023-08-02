import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";
import { Achievement } from "@type/index";

type achievement = {
  type: number;
};

export function useAchievement(params?: achievement) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.ACHIEVEMENT, params],
    () => client.achievement.get(params)
  );

  return {
    // @ts-ignore
    achievement: data?.data?.flatMap((item: Achievement) => item?.images) ?? {},
    isLoading,
    error,
  };
}
