"use client";
import {
  Box,
  Grid,
  Group,
  Loader,
  Pagination,
  Stack,
  Title,
} from "@mantine/core";
import { MovieCard } from "./components/MovieCard";
import Filters from "./components/Filters";
import { useMovieFilters } from "./lib/swrHooks";
import { useAppContext } from "./components/AppContext";
import { useEffect } from "react";
import { NoResults } from "./components/NoResults";

export default function HomePage() {
  const { activePage, setActivePage, filters } = useAppContext();
  const { data: movies, isLoading } = useMovieFilters({
    page: activePage,
    ...filters,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activePage]);

  return (
    <Box pt={42} pb={80} px={90}>
      <Group justify="space-between">
        <Title order={2} size={32} fw={700}>
          Movies
        </Title>
      </Group>
      <Stack gap={24}>
        <Filters />
        <Grid pt={24} justify="center">
          {isLoading && (
            <Grid.Col span="content" h="calc(100vh - 333px)">
              <Loader />
            </Grid.Col>
          )}
          {!isLoading &&
            movies &&
            movies.results.length > 0 &&
            movies.results.map((movie, index) => (
              <Grid.Col key={movie.id} span={6}>
                <MovieCard key={movie.id} priority={index < 6} {...movie} />
              </Grid.Col>
            ))}
          {!isLoading && movies && movies.results.length === 0 && (
            <Grid.Col span="content">
              <NoResults />
            </Grid.Col>
          )}
        </Grid>
        {!!movies?.results?.length && (
          <Pagination
            style={{ marginLeft: "auto" }}
            value={activePage}
            onChange={setActivePage}
            total={movies?.total_pages}
          />
        )}
      </Stack>
    </Box>
  );
}
