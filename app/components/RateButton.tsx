import {
  ActionIcon,
  ActionIconProps,
  Button,
  Group,
  Modal,
  Rating,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Movie } from "../types";
import { useDisclosure } from "@mantine/hooks";
import { useAppContext } from "./AppContext";

interface RateButtonProps extends ActionIconProps {
  movie: Movie;
}

export const RateButton: React.FC<RateButtonProps> = (props) => {
  const { movies, setMovies } = useAppContext();
  const [opened, { open, close }] = useDisclosure(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [savedRating, setSavedRating] = useState(0);

  useEffect(() => {
    const ratedMovie = movies.find(
      (movie: Movie) => movie.id === props.movie.id
    );

    if (ratedMovie) {
      setRatingValue(ratedMovie.rating);
      setSavedRating(ratedMovie.rating);
    }
  }, [props.movie.id, movies]);

  const saveRating = () => {
    const ratedMoviesDB = localStorage.getItem("ratedMovies");
    const ratedMoviesArray: Movie[] = ratedMoviesDB
      ? JSON.parse(ratedMoviesDB)
      : [];
    const ratedMovieIndex = ratedMoviesArray.findIndex(
      (movie: Movie) => movie.id === props.movie.id
    );

    if (ratedMovieIndex !== -1) {
      if (ratingValue === 0) {
        ratedMoviesArray.splice(ratedMovieIndex, 1);
      } else {
        const ratedMovie = ratedMoviesArray[ratedMovieIndex];

        ratedMoviesArray.splice(ratedMovieIndex, 1, {
          ...ratedMovie,
          rating: ratingValue,
        });
      }
    } else if (ratingValue > 0) {
      ratedMoviesArray.push({ ...props.movie, rating: ratingValue });
    }

    localStorage.setItem("ratedMovies", JSON.stringify(ratedMoviesArray));

    setMovies(ratedMoviesArray);
    setSavedRating(ratingValue);
    close();
  };

  const removeRating = () => {
    setRatingValue(0);
  };

  return (
    <>
      <Modal.Root
        opened={opened}
        onClose={() => {
          if (ratingValue !== savedRating) {
            setRatingValue(savedRating);
          }
          close();
        }}
        centered
      >
        <Modal.Overlay />
        <Modal.Content maw={380}>
          <Modal.Header
            p={16}
            style={{ borderBottom: "1px solid var(--mantine-color-grey-2)" }}
          >
            <Modal.Title>Your rating</Modal.Title>

            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body p={16}>
            <Stack>
              <Title order={4} fz={16}>
                {props.movie.title}
              </Title>
              <Rating
                count={10}
                size="lg"
                color="var(--mantine-color-yellow-0)"
                value={ratingValue}
                onChange={(value) => {
                  setRatingValue(value);
                }}
              />
              <Group>
                <Button onClick={saveRating}>Save</Button>
                <Button onClick={removeRating} variant="transparent" p={0}>
                  Remove rating
                </Button>
              </Group>
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <Group wrap="nowrap" gap={4} style={{ alignSelf: "flex-start" }}>
        <ActionIcon onClick={open} variant="transparent">
          <FaStar
            size={23.3}
            color={
              savedRating > 0
                ? "var(--mantine-color-purple-4)"
                : "var(--mantine-color-grey-4)"
            }
          />
        </ActionIcon>
        {savedRating > 0 && <Text fw={600}>{savedRating}</Text>}
      </Group>
    </>
  );
};
