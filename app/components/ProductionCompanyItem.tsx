import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { ProductionCompany } from "../types";

interface ProductionCompanyItemProps
  extends Omit<ProductionCompany, "id" | "origin_country"> {
  key: number;
}

export const ProductionCompanyItem: React.FC<ProductionCompanyItemProps> = ({
  name,
  logo_path,
}) => {
  return (
    <Flex align="center" gap={8}>
      <Flex
        w={40}
        h={40}
        justify="center"
        align="center"
        style={{
          border: "0.5px solid #F1F1F1",
          borderRadius: 40,
        }}
      >
        {logo_path ? (
          <Box
            bg={`url(https://image.tmdb.org/t/p/w200${logo_path})`}
            bgp="center"
            bgsz="contain"
            bgr="no-repeat"
            w="100%"
            h="100%"
          />
        ) : (
          <RiMovie2Fill size={30} />
        )}
      </Flex>
      <Text fw={700}>{name}</Text>
    </Flex>
  );
};
