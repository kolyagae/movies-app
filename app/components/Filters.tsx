import { Flex } from "@mantine/core";
import React from "react";
import { SelectRatings } from "./SelectRatings/SelectRatings";
import { ResetFiltersBtn } from "./ResetFiltersBtn";
import { SelectGenres } from "./SelectGenres/SelectGenres";
import { SelectReleaseYear } from "./SelectReleaseYear/SelectReleaseYear";
import { Sort } from "./Sort/Sort";

const Filters = () => {
  return (
    <>
      <Flex align="end" wrap="wrap" gap={16} pt={16}>
        <SelectGenres />
        <SelectReleaseYear />
        <SelectRatings />
        <ResetFiltersBtn />
      </Flex>
      <Flex justify="end">
        <Sort />
      </Flex>
    </>
  );
};

export default Filters;
