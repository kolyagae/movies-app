import styles from "./NavLinks.module.css";
import React from "react";
import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../constants";

interface NavLinksProps {
  onClose: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ onClose }) => {
  const pathname = usePathname();

  return (
    <Stack gap={16} pt={80}>
      {navLinks.map(({ name: linkName, href }) => {
        const isActiveLink = href === pathname.replace(/\d+/g, "");
        const linkColor = isActiveLink
          ? "var(--mantine-color-purple-4)"
          : "var(--mantine-color-grey-6)";

        return (
          <Button
            className={styles.link}
            onClick={onClose}
            key={href}
            justify="left"
            variant={isActiveLink ? "light" : "transparent"}
            size="md"
            p={10}
            c={linkColor}
            fw={isActiveLink ? 700 : 400}
            component={Link}
            href={href}
          >
            {linkName}
          </Button>
        );
      })}
    </Stack>
  );
};
