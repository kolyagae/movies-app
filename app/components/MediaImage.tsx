import Image, { ImageProps } from "next/image";

interface ImageLoaderProps {
  src: string | null;
  width: number;
  quality?: number;
}

const imageLoader = ({ src }: ImageLoaderProps): string => {
  return src?.startsWith("/moviePoster")
    ? src
    : `https://image.tmdb.org/t/p/w300${src}`;
};

export const MediaImage = ({ alt, src, ...props }: ImageProps) => {
  return (
    <Image
      loader={imageLoader}
      src={src ? src : "/moviePoster.png"}
      alt={alt}
      {...props}
    />
  );
};
