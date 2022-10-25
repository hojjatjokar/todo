import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "./api-client";

export const useGetTodos = () => {
  const query = useQuery(['todos'], ()=> {
    return ApiClient.get("https://randomuser.me/api/?results=40");
  }, { refetchOnWindowFocus: false });

  return query;
}