"use client";
import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { Filters, Movie } from "../types";
import { defaultFilters } from "../constants";
import { SideBar } from "./Sidebar/SideBar";
import { Box, Container } from "@mantine/core";
import { usePathname } from "next/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const ratedMoviesDB = localStorage.getItem("ratedMovies");
    const ratedMoviesArray: Movie[] = ratedMoviesDB
      ? JSON.parse(ratedMoviesDB)
      : [];
    setMovies(ratedMoviesArray);
  }, []);

  useEffect(() => {
    if (path.slice(1).includes(`/`)) {
      setIsNotFound(true);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        filters,
        setFilters,
        activePage,
        setActivePage,
        movies,
        setMovies,
        isNotFound,
        setIsNotFound,
      }}
    >
      <Container display="flex" maw={1440} mih="100vh" p={0}>
        <SideBar />
        <Box
          component="main"
          w={"100%"}
          flex={1}
          display="flex"
          px={{ xs: 10, sm: 20, md: 70, lg: 90, xl: 20 }}
          style={{
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          bg="var(--mantine-color-grey-1)"
        >
          {children}
        </Box>
      </Container>
    </AppContext.Provider>
  );
};
