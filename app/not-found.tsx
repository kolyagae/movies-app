"use client";
import styles from "./not-found.module.css";
import { Button, Stack, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import noFoundImg from "../public/notFound.png";
import { useAppContext } from "./components/AppContext";

export default function NotFound() {
  const { setIsNotFound } = useAppContext();

  const resetNotFoundStatus = () => {
    setIsNotFound(false);
  };

  return (
    <Stack className={styles.container}>
      <Image
        src={noFoundImg}
        alt="Not found image"
        sizes="656px"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <Stack gap={16} align="center">
        <Text className={styles.text}>
          We can&apos;t find the page you are looking for
        </Text>
        <Button
          className={styles.button}
          component={Link}
          href="/"
          onClick={resetNotFoundStatus}
        >
          Go Home
        </Button>
      </Stack>
    </Stack>
  );
}
