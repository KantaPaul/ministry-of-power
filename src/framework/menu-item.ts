import { useQuery } from "react-query";
import { API_ENDPOINTS } from "@framework/client/api-endpoints";
import client from "@framework/client/index";

export function useMenuItems(params?: any, options?: any) {
  const { data, isLoading, error } = useQuery(
    [API_ENDPOINTS.MENU_ITEM, params],
    () => client.menuItem.all(params),
    {
      ...options,
    }
  );

  return {
    menuItems: data ?? [],
    isLoading,
    error,
  };
}
