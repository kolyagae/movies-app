import { Box, Flex, Text, TextProps, Title } from "@mantine/core";
import React from "react";

interface MovieDetailItemProps extends TextProps {
  title: string;
  text: string;
}

export const MovieDetailItem: React.FC<MovieDetailItemProps> = (props) => {
  const { title, text = "no-data" } = props;

  return (
    <Flex gap={8} fz={16} c="var(--mantine-color-grey-5)">
      <Title fz={16} fw={400} order={6} w={props.truncate ? "auto" : 140}>
        {title}
      </Title>
      {props.truncate ? (
        <Box w={190}>
          <Text c="var(--mantine-color-grey-6)" {...props}>
            {text}
          </Text>
        </Box>
      ) : (
        <Text span c="var(--mantine-color-grey-6)">
          {text}
        </Text>
      )}
    </Flex>
  );
};
