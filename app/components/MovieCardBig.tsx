import { Flex, Group, Paper, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { MediaImage } from "./MediaImage";
import { FaStar } from "react-icons/fa";
import { MovieDetailsList } from "./MovieDetailsList";
import { RateButton } from "./RateButton";
import { useMovieDetails } from "../lib/swrHooks";
import { notFound } from "next/navigation";

interface MovieCardBigProps {
  movieId: string;
}

export const MovieCardBig: React.FC<MovieCardBigProps> = ({ movieId }) => {
  const { data, isLoading } = useMovieDetails(movieId);

  if (!data) {
    notFound();
  }

  return (
    data &&
    !isLoading && (
      <Paper p={24} pr={68} pos="relative">
        <Group gap={16}>
          <MediaImage
            width={250}
            height={352}
            src={data?.poster_path}
            alt={`${data.original_title} poster`}
          />
          <Stack justify="space-between" w={442} h={352}>
            <Stack gap={4}>
              <Title
                order={4}
                fz={20}
                fw={600}
                c="var(--mantine-color-purple-4)"
              >
                {data.original_title}
              </Title>
              <Text fw={400} c="var(--mantine-color-grey-5)">
                {data.release_date?.slice(0, 4)}
              </Text>
              <Flex align="center">
                <FaStar size={28} color="var(--mantine-color-yellow-0)" />
                <Text pl={4} pr={8} fw={600}>
                  {data.vote_average?.toFixed(1)}
                </Text>
                <Text c="var(--mantine-color-grey-5)">({data.vote_count})</Text>
              </Flex>
            </Stack>
            <MovieDetailsList
              releaseDate={data.release_date}
              genres={data.genres}
              budget={data.budget}
              revenue={data.revenue}
              runtime={data.runtime}
            />
          </Stack>
          <RateButton movie={data} />
        </Group>
      </Paper>
    )
  );
};

export default MovieCardBig;
