import { Box, Flex, Text, TextProps, Title } from "@mantine/core";
import React from "react";

interface MovieDetailItemProps extends TextProps {
  title: string;
  text: string;
}

export const MovieDetailItem: React.FC<MovieDetailItemProps> = (props) => {
  const { title, text = "no-data" } = props;

  return (
    <Flex gap={8} c="var(--mantine-color-grey-5)" align="center">
      <Title
        fz={{ xs: 14, sm: 16 }}
        fw={400}
        order={6}
        w={props.truncate ? "auto" : 140}
      >
        {title}
      </Title>
      {props.truncate ? (
        <Box w={{ xs: 160, sm: 190 }}>
          <Text
            fz={{ xs: 14, sm: 16 }}
            fw={400}
            c="var(--mantine-color-grey-6)"
            {...props}
          >
            {text}
          </Text>
        </Box>
      ) : (
        <Text
          fz={{ xs: 14, sm: 16 }}
          fw={400}
          span
          c="var(--mantine-color-grey-6)"
        >
          {text}
        </Text>
      )}
    </Flex>
  );
};
