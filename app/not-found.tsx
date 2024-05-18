import { Button, Stack, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Stack justify="center" align="center" h="100vh">
      <Image width={656} height={196} alt="Not found" src="/notFound.png" />
      <Text fz={20} fw={600}>
        We can&apos;t find the page you are looking for
      </Text>
      <Button component={Link} href="/">
        Go Home
      </Button>
    </Stack>
  );
}
