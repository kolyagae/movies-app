import {
  Stack,
  Modal as MantineModal,
  Title,
  Rating,
  Group,
  Button,
} from "@mantine/core";
import styles from "./Modal.module.css";
import React, { useEffect, useState } from "react";
import { Movie } from "../../types";
import { useAppContext } from "../AppContext";

interface ModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
  currentRating: number;
  setCurrentRating: React.Dispatch<React.SetStateAction<number>>;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, currentRating, setCurrentRating } = props;
  const { movies, setMovies } = useAppContext();
  const [ratingValue, setRatingValue] = useState(0);

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
    setCurrentRating(ratingValue);
    onClose();
  };

  const removeRating = () => {
    setRatingValue(0);
  };

  const handleChangeRating = (rating: number) => {
    setRatingValue(rating);
  };

  const handleCloseModal = () => {
    if (ratingValue !== currentRating) {
      setRatingValue(currentRating);
    }
    onClose();
  };

  useEffect(() => {
    const ratedMovie = movies.find(
      (movie: Movie) => movie.id === props.movie.id
    );

    if (ratedMovie) {
      setRatingValue(ratedMovie.rating);
      setCurrentRating(ratedMovie.rating);
    }
  }, [movies, props.movie.id, setCurrentRating]);

  return (
    <MantineModal.Root opened={isOpen} onClose={handleCloseModal} centered>
      <MantineModal.Overlay />
      <MantineModal.Content className={styles.modalContent}>
        <MantineModal.Header className={styles.modalHeader}>
          <MantineModal.Title>Your rating</MantineModal.Title>
          <MantineModal.CloseButton size="sm" />
        </MantineModal.Header>
        <MantineModal.Body className={styles.modalBody}>
          <Stack>
            <Title order={4} className={styles.title}>
              {props.movie.title}
            </Title>
            <Rating
              count={10}
              style={{ width: "100%", justifyContent: "space-between" }}
              size="lg"
              color="var(--mantine-color-yellow-0)"
              value={ratingValue}
              onChange={handleChangeRating}
            />
            <Group>
              <Button
                size="sm"
                classNames={{ root: styles.saveButton }}
                onClick={saveRating}
              >
                Save
              </Button>
              <Button onClick={removeRating} variant="transparent" p={0}>
                Remove rating
              </Button>
            </Group>
          </Stack>
        </MantineModal.Body>
      </MantineModal.Content>
    </MantineModal.Root>
  );
};
