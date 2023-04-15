import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMorti, IRes } from '../../types/i-morti';
export const mortiApi = createApi({
  reducerPath: 'mortiapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com' }),

  endpoints: (build) => ({
    searchUsers: build.query<IRes, string>({
      query: (search: string) => {
        input: 'lll';
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
