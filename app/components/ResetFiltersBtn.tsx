import { Button } from "@mantine/core";
import React from "react";
import { useAppContext } from "./AppContext";
import { defaultFilters } from "../constants";

export const ResetFiltersBtn: React.FC = () => {
  const { setActivePage, setFilters } = useAppContext();

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    setActivePage(1);
  };

  return (
    <Button
      onClick={handleResetFilters}
      variant="transparent"
      fz={14}
      size="xs"
      h={42}
      p={0}
    >
      Reset filters
    </Button>
  );
};
