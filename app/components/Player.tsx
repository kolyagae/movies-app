import { Box, Loader } from "@mantine/core";
import React, { useState } from "react";

type PlayerProps = {
  videoId: string;
};

const Player: React.FC<PlayerProps> = ({ videoId }: PlayerProps) => {
  return (
    <Box w={560} h={315} pos="relative">
      <iframe
        width="100%"
        height="100%"
        style={{ borderRadius: 9, border: 0 }}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Box>
  );
};

export default Player;
