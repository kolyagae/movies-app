import styles from "./SelectGenres.module.css";
import React, { useState } from "react";
import { useAppContext } from "../AppContext";
import { MultiSelect } from "@mantine/core";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useGenres } from "../../lib/swrHooks";

export const SelectGenres: React.FC = () => {
  const { data } = useGenres();
  const { filters, setActivePage, setFilters } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
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
      classNames={{
        root: styles.root,
        input: styles.input,
        option: styles.option,
        pillsList: styles.pillsList,
        pill: styles.pill,
      }}
      w={283.67}
      placeholder={filters.with_genres.length === 0 ? "Select genre" : ""}
      label="Genres"
      value={filters.with_genres}
      onChange={handleGenreChange}
      onDropdownOpen={toggleMenu}
      onDropdownClose={toggleMenu}
      data={genreOptions}
      rightSection={
        isOpen ? (
          <SlArrowUp color="var(--mantine-color-purple-4)" />
        ) : (
          <SlArrowDown />
        )
      }
    />
  );
};
