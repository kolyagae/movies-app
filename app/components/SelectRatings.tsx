import { Flex, NumberInput, useMantineTheme } from "@mantine/core";
import React from "react";
import { useAppContext } from "./AppContext";

export const SelectRatings: React.FC = () => {
  const { filters, setFilters } = useAppContext();

  const handleMinRatingChange = (value: string | number) => {
    setFilters({ ...filters, vote_average_gte: value.toString() });
  };

  const handleMaxRatingChange = (value: string | number) => {
    setFilters({ ...filters, vote_average_lte: value.toString() });
  };

  return (
    <Flex gap={8} align="end">
      <NumberInput
        onChange={handleMinRatingChange}
        label="Ratings"
        placeholder="From"
      />
      <NumberInput
        onChange={handleMaxRatingChange}
        label=" "
        placeholder="To"
      />
    </Flex>
  );
};
