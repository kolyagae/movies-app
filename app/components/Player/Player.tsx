import styles from "./Player.module.css";
import { AspectRatio } from "@mantine/core";
import React from "react";

type PlayerProps = {
  videoId: string;
};

const Player: React.FC<PlayerProps> = ({ videoId }: PlayerProps) => {
  return (
    <AspectRatio ratio={496 / 276} maw={496}>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </AspectRatio>
  );
};

export default Player;
