import { Flex, Group, Paper, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { FaStar } from "react-icons/fa";
import { getGenreName } from "../lib/getGenresNames";
import { Movie } from "../types";
import { MovieDetailItem } from "./MovieDetailItem";
import { MediaImage } from "./MediaImage";
import { useGenres } from "../lib/swrHooks";
import Link from "next/link";
import { RateButton } from "./RateButton";

interface MovieCardProps extends Movie {
  priority: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { data } = useGenres();
  const genreNames = props.genre_ids
    ? props.genre_ids.map((id) => getGenreName(id, data?.genres)).join(", ")
    : "no data";

  return (
    <Paper p={24}>
      <Group justify="space-between" wrap="nowrap">
        <Link style={{ display: "contents" }} href={`/movies/${props.id}`}>
          <MediaImage
            priority={props.priority}
            style={{ width: "auto", height: 170 }}
            src={props.poster_path}
            alt="Movie poster"
          />
          <Stack maw={240} h={170} justify="space-between">
            <Stack gap={8}>
              <Title order={4}>{props.original_title}</Title>
              <Text>{props.release_date?.slice(0, 4)}</Text>
              <Flex>
                <FaStar size={23.3} color="var(--mantine-color-yellow-0)" />
                <Text>{props.vote_average?.toFixed(1)}</Text>
                <Text> ({props.vote_count})</Text>
              </Flex>
            </Stack>
            <MovieDetailItem title="Genres" text={genreNames} truncate="end" />
          </Stack>
        </Link>
        <RateButton movie={props} />
      </Group>
    </Paper>
  );
};
