"use client";
import { Box, Grid, Group, Pagination, Stack, Title } from "@mantine/core";
import React, { useCallback, useState } from "react";
import { Movie } from "../types";
import { MovieCard } from "../components/MovieCard";
import { Search } from "../components/Search";
import { useAppContext } from "../components/AppContext";
import { NoRatedMovies } from "../components/NoRatedMovies";

export default function RatingPage() {
  const { movies } = useAppContext();
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [activePage, setActivePage] = useState(1);

  const handleSearchResultsChange = useCallback((results: Movie[]) => {
    setActivePage(1);
    setSearchResults(results);
  }, []);

  return (
    <Box pt={42} pb={80} px={90}>
      <Group justify="space-between">
        <Title order={2} size={32} fw={700}>
          Rated movies
        </Title>
        <Search onSearchResultsChange={handleSearchResultsChange} />
      </Group>
      <Stack gap={24}>
        <Grid pt={24}>
          {movies.length === 0 && (
            <Grid.Col span={12}>
              <NoRatedMovies />
            </Grid.Col>
          )}
          {(searchResults.length > 0 ? searchResults : movies)
            .slice((activePage - 1) * 20, activePage * 20)
            .map((movie, i) => (
              <Grid.Col key={movie.id} span={6}>
                <MovieCard key={movie.id} priority={i < 6} {...movie} />
              </Grid.Col>
            ))}
        </Grid>
        {searchResults && (
          <Pagination
            style={{ alignSelf: "center" }}
            value={activePage}
            onChange={setActivePage}
            total={Math.ceil(
              (searchResults.length > 0
                ? searchResults.length
                : movies.length) / 20
            )}
          />
        )}
      </Stack>
    </Box>
  );
}
