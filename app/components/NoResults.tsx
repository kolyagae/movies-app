import { Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

export const NoResults = () => {
  return (
    <Stack align="center">
      <Image
        alt="No results"
        width={310.7}
        height={252}
        src="/emptyResults.png"
      />
      <Text fz={20} fw={600}>
        We don&apos;t have such movies, look for another one
      </Text>
    </Stack>
  );
};
