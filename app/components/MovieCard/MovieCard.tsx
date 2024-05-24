import styles from "./MovieCard.module.css";
import { Flex, Paper, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { FaStar } from "react-icons/fa";
import { getGenreName } from "../../lib/getGenresNames";
import { Movie } from "../../types";
import { MovieDetailItem } from "../MovieDetailItem";
import { MediaImage } from "../MediaImage";
import { useGenres } from "../../lib/swrHooks";
import Link from "next/link";
import { RateButton } from "../RateButton/RateButton";
import { formatVoteCount } from "../../lib/formatData";

interface MovieCardProps extends Movie {
  priority: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { data } = useGenres();
  const genreNames = props.genre_ids
    ? props.genre_ids.map((id) => getGenreName(id, data?.genres)).join(", ")
    : "no data";

  return (
    <Paper className={styles.paper}>
      <Flex className={styles.wrapper} wrap="nowrap">
        <Flex
          className={styles.description}
          component={Link}
          href={`/${props.id}`}
        >
          <MediaImage
            priority={props.priority}
            width={119}
            height={170}
            src={props.poster_path}
            alt="Movie poster"
          />
          <Stack maw={240} h={170} justify="space-between">
            <Stack gap={8}>
              <Title className={styles.title} order={4}>
                {props.original_title}
              </Title>
              <Text fw={400} c="var(--mantine-color-grey-5)">
                {props.release_date?.slice(0, 4)}
              </Text>
              <Flex align="center">
                <FaStar size={28} color="var(--mantine-color-yellow-0)" />
                <Text fw={600} pr={4} pl={8}>
                  {props.vote_average?.toFixed(1)}
                </Text>
                <Text c="var(--mantine-color-grey-5)">
                  {" "}
                  ({formatVoteCount(props.vote_count)})
                </Text>
              </Flex>
            </Stack>
            <MovieDetailItem title="Genres" text={genreNames} truncate="end" />
          </Stack>
        </Flex>
        <RateButton movie={props} />
      </Flex>
    </Paper>
  );
};
