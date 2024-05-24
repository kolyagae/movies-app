import styles from "./Search.module.css";
import { Button, Input } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Movie } from "../../types";
import { useAppContext } from "../AppContext";

interface SearchProps {
  onSearchResultsChange: (results: Movie[]) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearchResultsChange }) => {
  const [searchValue, setSearchValue] = useState("");
  const { movies } = useAppContext();

  const handleSearch = () => {
    const searchResults = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    onSearchResultsChange(searchResults);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (!value.trim()) {
      onSearchResultsChange(movies);
    }
  };

  useEffect(() => {
    onSearchResultsChange(movies);
  }, [movies, onSearchResultsChange]);

  return (
    <Input
      classNames={{ input: styles.input }}
      w={{ base: "100%", md: "50%" }}
      size="lg"
      radius="md"
      placeholder="Search movie title"
      rightSectionWidth={110}
      leftSectionWidth={35}
      rightSectionPointerEvents="all"
      value={searchValue}
      onChange={handleChange}
      leftSection={<LuSearch size={16} color="var(--mantine-color-gray-5)" />}
      rightSection={
        <Button
          className={styles.button}
          w={88}
          h={32}
          aria-label="Search input"
          onClick={handleSearch}
        >
          Search
        </Button>
      }
    />
  );
};
