import { SearchParams } from "../types";

export const createURLSearchParams = (params: SearchParams) => {
  const queryParams = new URLSearchParams({
    page: params.page.toString(),
    ...(params.sortBy && { sort_by: params.sortBy }),
    ...(params.primary_release_year && {
      primary_release_year: params.primary_release_year.toString(),
    }),
    ...(params.with_genres && { with_genres: params.with_genres.toString() }),
    ...(params.vote_average_gte && {
      "vote_average.gte": params.vote_average_gte.toString(),
    }),
    ...(params.vote_average_lte && {
      "vote_average.lte": params.vote_average_lte.toString(),
    }),
  }).toString();

  return queryParams;
};
