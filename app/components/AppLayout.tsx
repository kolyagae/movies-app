"use client";
import React, { useEffect, useState } from "react";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SideBar } from "./SideBar";
import { AppContext, Filters } from "./AppContext";
import { Movie } from "../types";
import { defaultFilters } from "../constants";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const ratedMoviesDB = localStorage.getItem("ratedMovies");
    const ratedMoviesArray: Movie[] = ratedMoviesDB
      ? JSON.parse(ratedMoviesDB)
      : [];
    setMovies(ratedMoviesArray);
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
      }}
    >
      <AppShell
        navbar={{
          width: 280,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <SideBar onCloseMenu={toggle} />
        <AppShell.Main
          p={0}
          pl={280}
          maw={1472}
          bg="var(--mantine-color-grey-1)"
        >
          {children}
        </AppShell.Main>
      </AppShell>
    </AppContext.Provider>
  );
};
