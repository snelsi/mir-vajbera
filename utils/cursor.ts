"use client";

import { useEffect } from "react";
import { rainbowCursor } from "cursor-effects";

const useCursor = () => {
  useEffect(() => {
    const cursor = new rainbowCursor();
    return () => {
      cursor.destroy();
    };
  }, []);
};

const CustomCursor = () => {
  useCursor();
  return null;
};

export default CustomCursor;
