"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import NextImage, { ImageProps as NextImageProps } from "next/image";

import { useImages } from "@/utils/images";
import { getRandomNum } from "@/utils/utils";

const useRandomImage = () => {
  const { getRandomImage } = useImages();

  const [images, setImages] = useState(() => [getRandomImage()]);

  const loadNextImage = useCallback(
    () => setImages((prev) => [...prev, getRandomImage()]),
    [getRandomImage]
  );

  const hidePreviousImage = useCallback(
    () => setImages((prev) => prev.slice(1)),
    []
  );

  useEffect(() => {
    const t = setTimeout(() => {
      loadNextImage();
    }, getRandomNum(1000, 16000));
    return () => {
      clearTimeout(t);
    };
  }, [images, loadNextImage]);

  return { images, setImages, hidePreviousImage, loadNextImage };
};

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

interface ImageProps extends NextImageProps {
  src: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = "",
  onLoadingComplete,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  const onLoaded = useCallback(
    (img: HTMLImageElement) => {
      setLoaded(true);
      onLoadingComplete?.(img);
    },
    [onLoadingComplete]
  );

  return (
    <motion.div
      initial="hidden"
      animate={loaded ? "visible" : "hidden"}
      exit="hidden"
      variants={variants}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes="50vw"
        onLoadingComplete={onLoaded}
        {...props}
      />
    </motion.div>
  );
};

const Tile: React.FC = () => {
  const { images, hidePreviousImage, loadNextImage } = useRandomImage();

  return (
    <div className="window" onClick={loadNextImage}>
      <AnimatePresence>
        {images.map((src, i) => (
          <Image
            src={src}
            alt=""
            onLoadingComplete={i > 1 ? hidePreviousImage : undefined}
            key={src}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Tile);
