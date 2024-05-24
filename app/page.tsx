"use client";
import {
  Box,
  Container,
  Loader,
  Pagination,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { MovieCard } from "./components/MovieCard/MovieCard";
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
    <Stack gap={24} pt={42} pb={80}>
      <Title order={2} size={32} fw={700}>
        Movies
      </Title>
      <Filters />

      <SimpleGrid
        cols={isLoading || movies?.results?.length === 0 ? 1 : { md: 1, lg: 2 }}
      >
        {isLoading && (
          <Container h="100vh">
            <Loader />
          </Container>
        )}
        {!isLoading &&
          movies &&
          movies.results.length > 0 &&
          movies.results.map((movie, index) => (
            <MovieCard key={movie.id} priority={index < 6} {...movie} />
          ))}

        {!isLoading && movies && movies.results.length === 0 && (
          <Box>
            <NoResults />
          </Box>
        )}
      </SimpleGrid>
      {!!movies?.results?.length && (
        <Pagination
          style={{ marginLeft: "auto" }}
          value={activePage}
          onChange={setActivePage}
          total={movies.total_pages > 500 ? 500 : movies.total_pages}
        />
      )}
    </Stack>
  );
}
