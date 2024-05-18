import { Stack, Title } from "@mantine/core";
import React from "react";
import { ProductionCompanyItem } from "./ProductionCompanyItem";
import { useMovieDetails } from "../lib/swrHooks";

interface ProductionCompanyListProps {
  movieId: string;
}

export const ProductionCompanyList = ({
  movieId,
}: ProductionCompanyListProps) => {
  const { data: companyList } = useMovieDetails(movieId);

  if (!companyList?.production_companies?.length) {
    return null;
  }

  return (
    <Stack gap={16}>
      <Title order={4} fz={20} fw={600} c="var(--mantine-color-grey-6)">
        Production
      </Title>
      <Stack gap={12}>
        {companyList.production_companies.map((company) => (
          <ProductionCompanyItem
            key={company.id}
            name={company.name}
            logo_path={company.logo_path}
          />
        ))}
      </Stack>
    </Stack>
  );
};
