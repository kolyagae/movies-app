"use client";
import { AppShell, Button, Flex, Stack, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

interface SideBarProps {
  onCloseMenu: () => void;
}

const navLinks = [
  { name: "Movies", href: "/movies" },
  { name: "Rated movies", href: "/rating" },
];

export const SideBar = ({ onCloseMenu }: SideBarProps) => {
  const pathname = usePathname();
  const params = useParams<{ id: string }>();

  return (
    <AppShell.Navbar
      pos="absolute"
      h="100%"
      withBorder={false}
      bg="var(--mantine-color-purple-0)"
      p={24}
    >
      <Flex align="center" gap={12}>
        <Image width={32} height={32} src="/favicon.svg" alt="app-icon" />
        <Title
          c="var(--mantine-color-purple-4)"
          fw={600}
          lh={1.5}
          size={24}
          lts="-2%"
          order={1}
          ff="Poppins, sans-serif"
        >
          ArrowFlicks
        </Title>
      </Flex>
      <Stack gap={16} pt={80}>
        {navLinks.map((link) => {
          const isActiveLink =
            pathname === `${link.href}/${params.id}` ||
            pathname === `${link.href}`;

          return (
            <Button
              onClick={onCloseMenu}
              key={link.href}
              justify="left"
              variant={isActiveLink ? "light" : "transparent"}
              size="md"
              p={10}
              c={
                isActiveLink
                  ? "var(--mantine-color-purple-4)"
                  : "var(--mantine-color-grey-6)"
              }
              fw={isActiveLink ? 700 : 400}
              component={Link}
              href={link.href}
            >
              {link.name}
            </Button>
          );
        })}
      </Stack>
    </AppShell.Navbar>
  );
};
