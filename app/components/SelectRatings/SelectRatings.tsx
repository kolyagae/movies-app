import styles from "./SelectRatings.module.css";
import { Flex, NumberInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../AppContext";

export const SelectRatings: React.FC = () => {
  const { filters, setFilters } = useAppContext();
  const [minRating, setMinRating] = useState<string | number>(
    filters.vote_average_gte
  );
  const [maxRating, setMaxRating] = useState<string | number>(
    filters.vote_average_lte
  );

  useEffect(() => {
    if (+minRating <= +maxRating) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        vote_average_gte: minRating.toString(),
        vote_average_lte: maxRating.toString(),
      }));
    }
  }, [minRating, maxRating, setFilters]);

  useEffect(() => {
    if (filters.vote_average_gte === "" && filters.vote_average_lte === "") {
      setMinRating(filters.vote_average_gte);
      setMaxRating(filters.vote_average_lte);
    }
  }, [filters.vote_average_gte, filters.vote_average_lte]);

  return (
    <Flex gap={8} align="end" wrap="wrap">
      <NumberInput
        classNames={{
          root: styles.root,
          input: styles.input,
          controls: styles.controls,
        }}
        error={+minRating > +maxRating}
        value={minRating}
        onChange={setMinRating}
        label="Ratings"
        placeholder="From"
        min={0}
        max={10}
        clampBehavior="strict"
      />
      <NumberInput
        classNames={{
          root: styles.root,
          input: styles.input,
          controls: styles.controls,
        }}
        error={+minRating > +maxRating}
        value={maxRating}
        onChange={setMaxRating}
        label=" "
        placeholder="To"
        min={0}
        max={10}
        clampBehavior="strict"
      />
    </Flex>
  );
};
