import { Stack } from "@mantine/core";
import React from "react";
import { MovieDetailItem } from "./MovieDetailItem";
import {
  formatCurrency,
  formatDate,
  formatMovieRuntime,
} from "../lib/formatData";
import { getGenreName } from "../lib/getGenresNames";
import { Genre } from "../types";
import { useGenres } from "../lib/swrHooks";

interface MovieDetailsListProps {
  releaseDate: string;
  budget: number;
  revenue: number;
  genres: Genre[];
  runtime: number | null;
}

export const MovieDetailsList = ({
  releaseDate,
  budget,
  revenue,
  genres,
  runtime,
}: MovieDetailsListProps) => {
  const { data } = useGenres();

  const formattedMovieDetails = [
    {
      title: "Duration",
      text: formatMovieRuntime(runtime),
    },
    {
      title: "Premiere",
      text: formatDate(releaseDate),
    },
    {
      title: "Budget",
      text: formatCurrency(budget),
    },
    {
      title: "Gross worldwide",
      text: formatCurrency(revenue),
    },
    {
      title: "Genres",
      text:
        (genres &&
          genres
            .map((genre) => getGenreName(genre.id, data?.genres))
            .join(", ")) ||
        "no data",
    },
  ];

  return (
    <Stack gap={6}>
      {formattedMovieDetails.map((detail, index) => (
        <MovieDetailItem key={index} {...detail} />
      ))}
    </Stack>
  );
};
