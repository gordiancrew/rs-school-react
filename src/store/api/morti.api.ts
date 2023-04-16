import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRes } from '../../types/i-morti';
export const mortiApi = createApi({
  reducerPath: 'mortiapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com' }),

  endpoints: (build) => ({
    searchUsers: build.query<IRes, string>({
      query: (search: string) => {
        return {
          url: 'api/character',
          params: {
            name: search,
          },
        };
      },
    }),
  }),
});
export const { useSearchUsersQuery } = mortiApi;
