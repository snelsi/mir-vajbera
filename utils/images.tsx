"use client";

import { useCallback } from "react";
import images from "./data";

export const useImages = () => {
  const getRandomImage = useCallback(() => {
    let src = images[Math.floor(Math.random() * images.length)];
    src = `/images/${src}`;
    return src;
  }, []);

  return { images, getRandomImage };
};
