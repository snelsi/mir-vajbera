"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { getRandomNum } from "@/utils/utils";

const getLayout = () => {
  const ratio = getRandomNum(1, 99);
  const layout = `minmax(0, ${ratio}fr) minmax(0, ${100 - ratio}fr)`;
  return { "--layout": layout } as any;
};

interface GroupProps {
  direction: "vertical" | "horizontal";
  children: React.ReactNode;
}

const Group: React.FC<GroupProps> = ({ direction, children }) => {
  const [initial] = useState(getLayout);
  const controls = useAnimationControls();

  useEffect(() => {
    const shift = ({ ...props } = {}) =>
      controls.start(getLayout(), {
        duration: getRandomNum(1, 6),
        delay: getRandomNum(1, 6),
        ...props,
      });

    const animate = async () => {
      while (true) {
        await shift();
      }
    };

    animate();
  }, [controls]);

  return (
    <motion.div
      className="group"
      data-direction={direction}
      initial={initial}
      animate={controls}
      layout
    >
      {children}
    </motion.div>
  );
};

export default React.memo(Group);
