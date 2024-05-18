import { Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useMovieDetails } from "../lib/swrHooks";

interface BreadcrumbsProps {
  movieId: string;
}

export const Breadcrumbs = ({ movieId }: BreadcrumbsProps) => {
  const { data } = useMovieDetails(movieId);
  const links = [
    { title: "Movies", href: "/" },
    { title: data?.original_title || "Unknown Title", href: `/${movieId}` },
  ];

  return (
    <MantineBreadcrumbs fz={14} w={800} c="var(--mantine-color-purple-4)">
      {links.map((link, index) => (
        <Link href={link.href} key={index}>
          {link.title}
        </Link>
      ))}
    </MantineBreadcrumbs>
  );
};
