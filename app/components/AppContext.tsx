import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { Filters, Movie } from "../types";

interface AppContext {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  movies: Movie[];
  setMovies: Dispatch<React.SetStateAction<Movie[]>>;
  isNotFound: boolean;
  setIsNotFound: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContext | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("you need to use useSelectContext");
  }
  return context;
};
