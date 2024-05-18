import { Genre } from "../types";

export const getGenreName = (genreId: number, genres: Genre[] | undefined) => {
  const genre = genres?.find((genre) => genre.id === genreId);
  return genre?.name || "";
};
