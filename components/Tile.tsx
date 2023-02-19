"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";

import { useImages } from "@/utils/images";
import { getRandomNum } from "@/utils/utils";

const useRandomImage = () => {
  const { getRandomImage } = useImages();

  const [images, setImages] = useState(() => [getRandomImage()]);

  const loadNextImage = useCallback(
    () => setImages((prev) => [...prev, getRandomImage()]),
    [getRandomImage]
  );

  useEffect(() => {
    const t = setTimeout(() => {
      loadNextImage();
    }, getRandomNum(2000, 20000));
    return () => {
      clearTimeout(t);
    };
  }, [images, loadNextImage]);

  return { images, setImages, loadNextImage };
};

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Tile: React.FC = () => {
  const { images, setImages, loadNextImage } = useRandomImage();
  return (
    <div className="window" onClick={loadNextImage}>
      <AnimatePresence>
        {images.map((src, i) => (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            key={src}
          >
            <Image
              src={src}
              alt=""
              fill
              unoptimized
              onLoadingComplete={() => {
                if (i > 1) {
                  setImages((prev) => prev.slice(1));
                }
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Tile);
