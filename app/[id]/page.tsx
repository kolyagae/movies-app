"use client";
import React from "react";
import { Divider, Loader, Paper, Stack } from "@mantine/core";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ProductionCompanyList } from "../components/ProductionCompanyList";
import { useMovieDetails } from "../lib/swrHooks";
import MovieCardBig from "../components/MovieCardBig";
import { MovieTrailer } from "../components/MovieTrailer";
import { MovieDescription } from "../components/MovieDescription";

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default function MoviePage({ params: { id } }: MoviePageProps) {
  const { data, isLoading } = useMovieDetails(id);

  if (isLoading) {
    return (
      <Stack justify="center" align="center" h="100vh">
        <Loader />
      </Stack>
    );
  }

  return (
    <Stack justify="center" align="center" gap={20} pt={45}>
      <Breadcrumbs movieId={id} />
      <MovieCardBig movieId={id} />
      <Paper w={800} p={24}>
        <Stack>
          <MovieTrailer movieId={id} />
          <MovieDescription movieId={id} />
          {!!data?.production_companies?.length && <Divider />}
          <ProductionCompanyList movieId={id} />
        </Stack>
      </Paper>
    </Stack>
  );
}
