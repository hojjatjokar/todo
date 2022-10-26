import { useInfiniteQuery } from '@tanstack/react-query';
import { ApiClient } from './api-client';

export const useGetTodos = () => {
  return useInfiniteQuery(
    ['todos'],
    ({ pageParam = 0 }) => {
      return ApiClient.get(
        'https://randomuser.me/api/?results=40&page=' + pageParam
      );
    },
    { getNextPageParam: (lastPage) => lastPage++ }
  );
};
