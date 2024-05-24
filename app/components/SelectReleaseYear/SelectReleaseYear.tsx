import styles from "./SelectReleaseYear.module.css";
import React, { useState } from "react";
import { ComboboxItem, Select } from "@mantine/core";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { yearsVariants } from "../../constants";
import { useAppContext } from "../AppContext";

export const SelectReleaseYear: React.FC = () => {
  const { filters, setActivePage, setFilters } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const releaseYearOptions = yearsVariants.map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));
  const handleReleaseYearChange = (
    _value: string | null,
    option: ComboboxItem
  ) => {
    if (option) {
      setActivePage(1);
      setFilters({ ...filters, primary_release_year: option.value });
    }
  };

  return (
    <Select
      classNames={{
        root: styles.root,
        input: styles.input,
        option: styles.option,
      }}
      w={283.67}
      label="Release year"
      placeholder="Select release year"
      value={filters.primary_release_year}
      onChange={handleReleaseYearChange}
      onDropdownOpen={toggleMenu}
      onDropdownClose={toggleMenu}
      data={releaseYearOptions}
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
