import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "./api-client";

// export const useGetTodos = () => {
//   return useQuery(
//     "todos",
//     () => {
//       console.info("server request sent.");
//       return ApiClient.get("https://randomuser.me/api/?results=40");
//     },
//     // @TODO: Question: why we need this? 
//     { refetchOnWindowFocus: false }
//   );
// };

export const useGetTodos = () => {
  const query = useQuery(['todos'], ()=> {
    // @TODO: the domain name, endpoint and the 40 is hardcode, why?
    return ApiClient.get("https://randomuser.me/api/?results=40");
  });

  return query;
}