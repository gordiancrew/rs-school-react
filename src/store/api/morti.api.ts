import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMorti, IRes } from '../../types/i-morti';
export const mortiApi = createApi({
  reducerPath: 'morti/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com' }),
  endpoints: (build) => ({
    searchUsers: build.query<IRes, string>({
      query: (search: string) => ({
        url: 'api/character',
        params: {
          name: search,
        },
      }),
    }),
  }),
});
export const { useSearchUsersQuery } = mortiApi;
