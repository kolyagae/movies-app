import React, { useState } from "react";
import { useAppContext } from "./AppContext";
import { sortOptions } from "../constants";
import { ComboboxItem, Select, useMantineTheme } from "@mantine/core";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const Sort: React.FC = () => {
  const { filters, setFilters } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useMantineTheme();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleSortChange = (_value: string | null, option: ComboboxItem) => {
    if (option) {
      setFilters({ ...filters, sortBy: option.value });
    }
  };

  return (
    <Select
      label="Sort by"
      data={sortOptions}
      placeholder="Most popular"
      value={filters.sortBy}
      onChange={handleSortChange}
      w={284}
      onDropdownOpen={toggleMenu}
      onDropdownClose={toggleMenu}
      rightSection={
        isOpen ? <SlArrowUp color={theme.colors.purple[4]} /> : <SlArrowDown />
      }
    />
  );
};
