import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { Movie } from "../types";

export interface Filters {
  sortBy: string;
  with_genres: string[];
  primary_release_year: string;
  vote_average_gte: string;
  vote_average_lte: string;
}

interface AppContext {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  movies: Movie[];
  setMovies: Dispatch<React.SetStateAction<Movie[]>>;
}

export const AppContext = createContext<AppContext | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("you need to use useSelectContext");
  }
  return context;
};
