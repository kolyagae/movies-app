import styles from "./NoRatedMovies.module.css";
import { Button, Stack, Text } from "@mantine/core";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const NoRatedMovies = () => {
  return (
    <Stack justify="center" align="center" gap={16}>
      <Image
        width={400}
        height={300}
        alt="No rated movies"
        src="/emptyRatedMovies.png"
      />
      <Text
        fz={20}
        fw={600}
        style={{
          letterSpacing: "0.1px",
          lineHeight: 1,
        }}
      >
        You haven&apos;t rated any films yet
      </Text>
      <Button
        className={styles.button}
        component={Link}
        href="/"
        style={{ marginTop: 4 }}
      >
        Find movies
      </Button>
    </Stack>
  );
};
