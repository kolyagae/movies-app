import { Flex } from "@mantine/core";
import React from "react";
import { SelectGenres } from "./SelectGenres";
import { SelectReleaseYear } from "./SelectReleaseYear";
import { SelectRatings } from "./SelectRatings";
import { Sort } from "./Sort";
import { ResetFiltersBtn } from "./ResetFiltersBtn";

const Filters = () => {
  return (
    <>
      <Flex align="end" gap={16} pt={40}>
        <SelectGenres />
        <SelectReleaseYear />
        <SelectRatings />
        <ResetFiltersBtn />
      </Flex>
      <Flex justify="end" pt={24}>
        <Sort />
      </Flex>
    </>
  );
};

export default Filters;
