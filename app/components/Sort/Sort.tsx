import styles from "./Sort.module.css";
import React, { useState } from "react";
import { ComboboxItem, Select } from "@mantine/core";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useAppContext } from "../AppContext";
import { sortOptions } from "../../constants";

export const Sort: React.FC = () => {
  const { filters, setFilters } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleSortChange = (_value: string | null, option: ComboboxItem) => {
    if (option) {
      setFilters({ ...filters, sortBy: option.value });
    }
  };

  return (
    <Select
      classNames={{
        root: styles.root,
        input: styles.input,
        option: styles.option,
      }}
      label="Sort by"
      data={sortOptions}
      placeholder="Most popular"
      value={filters.sortBy}
      onChange={handleSortChange}
      w={284}
      onDropdownOpen={toggleMenu}
      onDropdownClose={toggleMenu}
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
