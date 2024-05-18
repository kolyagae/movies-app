import React from "react";
import { useMovieDetails } from "../lib/swrHooks";
import { Divider, Stack, Title } from "@mantine/core";
import Player from "./Player";

interface MovieTrailerProps {
  movieId: string;
}

export const MovieTrailer = ({ movieId }: MovieTrailerProps) => {
  const { data } = useMovieDetails(movieId);

  if (!data?.videos?.results?.length) {
    return null;
  }

  const firstVideoKey = data.videos.results[0].key;

  return (
    <>
      <Stack gap={16}>
        <Title order={4} fz={20} fw={600} c="var(--mantine-color-grey-6)">
          Trailer
        </Title>
        <Player videoId={firstVideoKey} />
      </Stack>
      <Divider />
    </>
  );
};
