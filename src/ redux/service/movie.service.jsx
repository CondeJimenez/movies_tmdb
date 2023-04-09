import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const KEY = import.meta.env.VITE_API_KEY;

export const tmdbApi = createApi({
  //va almacenar la info de la api
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/movie/" }),
  endpoints: (builder) => ({
    getTypeMovie: builder.query({
      query: (filter, page) =>
        `${filter}?api_key=${KEY}&language=en-US&page=${page}&region=MX`,
    }),
  }),
});

export const { useGetTypeMovieQuery } = tmdbApi;
