import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "./api-client";

// export const useGetTodos = () => {
//   return useQuery(
//     "todos",
//     () => {
//       console.info("server request sent.");
//       return ApiClient.get("https://randomuser.me/api/?results=40");
//     },
//     // Q: why we need this? 
//     { refetchOnWindowFocus: false }
//   );
// };

export const useGetTodos = () => {
  const query = useQuery(['todos'], ()=> {
    return ApiClient.get("https://randomuser.me/api/?results=40");
  });

  return query;
}