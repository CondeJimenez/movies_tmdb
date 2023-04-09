import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "./service/movie.service";

export const store = configureStore({
    reducer:{
        [tmdbApi.reducerPath]: tmdbApi.reducer
    }
})