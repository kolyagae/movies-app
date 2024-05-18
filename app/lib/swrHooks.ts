import useSWR from "swr";
import { Genre, MovieApiResponse, MovieDetails, SearchParams } from "../types";
import { createURLSearchParams } from "./createURLSearchParams";
import axios from "axios";

export const fetcher = (url: string) => axios(url).then((res) => res.data);

export const useMovieFilters = (params: SearchParams) => {
  try {
    const queryParams = createURLSearchParams(params);

    const url = `/api/movies?${queryParams}`;
    const { data, isLoading, error } = useSWR<MovieApiResponse>(url, fetcher);

    return {
      data,
      isLoading,
      isError: error,
    };
  } catch (error) {
    console.error("An error occurred in useMovieFilters:", error);
    throw error;
  }
};

export const useMovieDetails = (id: string) => {
  try {
    const url = `/api/${id}`;
    const { data, isLoading, error } = useSWR<MovieDetails>(url, fetcher);

    return {
      data,
      isLoading,
      isError: error,
    };
  } catch (error) {
    console.error("An error occurred in useMovieFilters:", error);
    throw error;
  }
};

export const useGenres = () => {
  const url = `/api/genres`;

  const { data, isLoading, error } = useSWR<{ genres: Genre[] }>(url, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};
