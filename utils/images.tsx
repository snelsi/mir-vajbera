"use client";

import React, { useCallback, useMemo } from "react";

interface ImagesContext {
  images: string[];
}

const defaultState: ImagesContext = {
  images: [],
};

const imagesContext = React.createContext<ImagesContext>(defaultState);

export const useImages = () => {
  const { images } = React.useContext(imagesContext);

  const getRandomImage = useCallback(() => {
    let src = images[Math.floor(Math.random() * images.length)];
    src = `/images/${src}`;
    return src;
  }, [images]);

  return { images, getRandomImage };
};

interface ImagesProviderProps {
  images: string[];
  children: React.ReactNode;
}

export const ImagesProvider: React.FC<ImagesProviderProps> = ({
  images,
  children,
}) => {
  const value: ImagesContext = useMemo(
    () => ({
      images,
    }),
    [images]
  );

  return (
    <imagesContext.Provider value={value}>{children}</imagesContext.Provider>
  );
};
