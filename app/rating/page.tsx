"use client";
import { Box, Flex, Pagination, SimpleGrid, Stack, Title } from "@mantine/core";
import React, { useCallback, useState } from "react";
import { Movie } from "../types";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { Search } from "../components/Search/Search";
import { useAppContext } from "../components/AppContext";
import { NoRatedMovies } from "../components/NoRatedMovies/NoRatedMovies";
import { NoResults } from "../components/NoResults";

export default function RatingPage() {
  const { movies } = useAppContext();
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [activePage, setActivePage] = useState(1);

  const handleSearchResultsChange = useCallback((results: Movie[]) => {
    setActivePage(1);
    setSearchResults(results);
  }, []);

  if (!movies.length) {
    return (
      <Box
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          display: "flex",
        }}
      >
        <NoRatedMovies />
      </Box>
    );
  }

  return (
    <Stack pt={40} pb={20} gap={24}>
      <Flex justify="space-between" wrap="wrap" mb={16}>
        <Title order={2} size={32} fw={700}>
          Rated movies
        </Title>
        <Search onSearchResultsChange={handleSearchResultsChange} />
      </Flex>
      {searchResults.length ? (
        <SimpleGrid cols={{ lg: 1, xl: 2 }}>
          {searchResults
            .slice((activePage - 1) * 20, activePage * 20)
            .map((movie, i) => (
              <MovieCard key={movie.id} priority={i < 6} {...movie} />
            ))}
        </SimpleGrid>
      ) : (
        <NoResults />
      )}
      {searchResults.length > 0 && (
        <Pagination
          style={{ alignSelf: "center" }}
          value={activePage}
          onChange={setActivePage}
          total={Math.ceil(
            (searchResults.length > 0 ? searchResults.length : movies.length) /
              20
          )}
        />
      )}
    </Stack>
  );
}
