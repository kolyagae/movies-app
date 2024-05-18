import { Button, Stack, Text } from "@mantine/core";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const NoRatedMovies = () => {
  return (
    <Stack justify="center" align="center">
      <Image
        width={400}
        height={300}
        alt="No rated movies"
        src="/emptyRatedMovies.png"
      />
      <Text fz={20} fw={600}>
        You haven&apos;t rated any films yet
      </Text>
      <Button component={Link} href="/">
        Find movies
      </Button>
    </Stack>
  );
};
