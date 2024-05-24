import { Button } from "@mantine/core";
import React from "react";
import { useAppContext } from "./AppContext";
import { defaultFilters } from "../constants";
import isEqual from "lodash.isequal";

export const ResetFiltersBtn: React.FC = () => {
  const { setActivePage, setFilters, filters } = useAppContext();

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
      style={{ background: "transparent", border: "none" }}
      disabled={isEqual(filters, defaultFilters)}
    >
      Reset filters
    </Button>
  );
};
