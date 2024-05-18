import React from "react";
import { useMovieDetails } from "../lib/swrHooks";
import { Stack, Text, Title } from "@mantine/core";

interface MovieDescriptionProps {
  movieId: string;
}

export const MovieDescription = ({ movieId }: MovieDescriptionProps) => {
  const { data } = useMovieDetails(movieId);

  if (!data?.overview) {
    return null;
  }

  return (
    <Stack gap={16}>
      <Title order={4} fz={20} fw={600} c="var(--mantine-color-grey-6)">
        Description
      </Title>
      <Text>{data.overview}</Text>
    </Stack>
  );
};
