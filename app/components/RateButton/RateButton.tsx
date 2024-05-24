import styles from "./RateButton.module.css";
import { ActionIcon, ActionIconProps, Flex, Text } from "@mantine/core";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Movie } from "../../types";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "../Modal/Modal";

interface RateButtonProps extends ActionIconProps {
  movie: Movie;
}

export const RateButton: React.FC<RateButtonProps> = (props) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [isModalOpen, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  return (
    <>
      <Flex className={styles.wrapper}>
        <ActionIcon onClick={openModal} variant="transparent">
          <FaStar
            size={28}
            color={
              currentRating > 0
                ? "var(--mantine-color-purple-4)"
                : "var(--mantine-color-grey-4)"
            }
          />
        </ActionIcon>
        {currentRating > 0 && <Text fw={600}>{currentRating}</Text>}
      </Flex>
      <Modal
        movie={props.movie}
        isOpen={isModalOpen}
        onClose={closeModal}
        currentRating={currentRating}
        setCurrentRating={setCurrentRating}
      />
    </>
  );
};
