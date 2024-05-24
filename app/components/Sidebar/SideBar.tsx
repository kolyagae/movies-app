"use client";
import styles from "./SideBar.module.css";
import { Box, Burger, Flex, Overlay, Title } from "@mantine/core";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { NavLinks } from "../NavLinks/NavLinks";
import { useAppContext } from "../AppContext";

export const SideBar = () => {
  const [opened, { close, toggle }] = useDisclosure();
  const { isNotFound } = useAppContext();

  return (
    <>
      <Burger
        className={styles.burger}
        color="var(--mantine-color-purple-4)"
        opened={opened}
        onClick={toggle}
        hiddenFrom="md"
        size="md"
      />
      <Box
        component="nav"
        className={`${styles.navbar} ${opened ? styles.visible : ""}`}
        bg={
          isNotFound
            ? "var(--mantine-color-grey-1)"
            : "var(--mantine-color-purple-0)"
        }
      >
        <Flex align="center" gap={12}>
          <Image width={32} height={32} src="/favicon.svg" alt="app-icon" />
          <Title order={1} className={styles.logo}>
            ArrowFlicks
          </Title>
        </Flex>
        {isNotFound ? null : <NavLinks onClose={close} />}
      </Box>
      {opened && <Overlay zIndex={2} backgroundOpacity={0.35} blur={3} />}
    </>
  );
};
