import React, { useState } from "react";
import { useAppContext } from "./AppContext";
import { useGenres } from "../lib/swrHooks";
import { MultiSelect, useMantineTheme } from "@mantine/core";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const SelectGenres: React.FC = () => {
  const { data } = useGenres();
  const { filters, setActivePage, setFilters } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useMantineTheme();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const genreOptions = data?.genres.map((genre) => ({
    value: genre.id.toString(),
    label: genre.name,
  }));

  const handleGenreChange = (value: string[]) => {
    setFilters({ ...filters, with_genres: value });
    setActivePage(1);
  };

  return (
    <MultiSelect
      w={283.67}
      placeholder={filters.with_genres.length === 0 ? "Select genre" : ""}
      label="Genres"
      value={filters.with_genres}
      onChange={handleGenreChange}
      onDropdownOpen={toggleMenu}
      onDropdownClose={toggleMenu}
      data={genreOptions}
      rightSection={
        isOpen ? <SlArrowUp color={theme.colors.purple[4]} /> : <SlArrowDown />
      }
    />
  );
};
