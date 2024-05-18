import React, { useState } from "react";
import { useAppContext } from "./AppContext";
import { ComboboxItem, Select, useMantineTheme } from "@mantine/core";
import { yearsVariants } from "../constants";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const SelectReleaseYear: React.FC = () => {
  const { filters, setActivePage, setFilters } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useMantineTheme();

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
      w={283.67}
      label="Release year"
      placeholder="Select release year"
      data={releaseYearOptions}
      value={filters.primary_release_year}
      onChange={handleReleaseYearChange}
      onDropdownOpen={toggleMenu}
      onDropdownClose={toggleMenu}
      rightSection={
        isOpen ? <SlArrowUp color={theme.colors.purple[4]} /> : <SlArrowDown />
      }
    />
  );
};
