import styles from "./MovieCardBig.module.css";
import { Flex, Paper, Stack, Text, Title } from "@mantine/core";
import React, { useEffect } from "react";
import { MediaImage } from "../MediaImage";
import { FaStar } from "react-icons/fa";
import { MovieDetailsList } from "../MovieDetailsList";
import { RateButton } from "../RateButton/RateButton";
import { useMovieDetails } from "../../lib/swrHooks";
import { formatVoteCount } from "../../lib/formatData";
import { useAppContext } from "../AppContext";
import { notFound } from "next/navigation";

interface MovieCardBigProps {
  movieId: string;
}

export const MovieCardBig: React.FC<MovieCardBigProps> = ({ movieId }) => {
  const { data, isLoading, isError } = useMovieDetails(movieId);
  const { setIsNotFound } = useAppContext();

  useEffect(() => {
    if (isError) {
      setIsNotFound(true);
      notFound();
    }
  });

  return (
    data &&
    !isLoading && (
      <Paper className={styles.paper}>
        <Flex className={styles.wrapper}>
          <Flex className={styles.description}>
            <MediaImage
              width={250}
              height={352}
              src={data?.poster_path}
              alt={`${data.original_title} poster`}
            />
            <Stack className={styles.info}>
              <Stack gap={4}>
                <Title className={styles.title} order={4}>
                  {data.original_title}
                </Title>
                <Text className={styles.releaseDate}>
                  {data.release_date?.slice(0, 4)}
                </Text>
                <Flex align="center">
                  <FaStar size={28} color="var(--mantine-color-yellow-0)" />
                  <Text pl={4} pr={8} fw={600}>
                    {data.vote_average?.toFixed(1)}
                  </Text>
                  <Text c="var(--mantine-color-grey-5)">
                    ({formatVoteCount(data.vote_count)})
                  </Text>
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
          </Flex>
          <RateButton movie={data} />
        </Flex>
      </Paper>
    )
  );
};
