"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const getLayout = () => {
  const ratio = Math.random();
  const layout = `minmax(0, ${ratio}fr) minmax(0, ${1 - ratio}fr)`;
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
        duration: 1 + 5 * Math.random(),
        delay: 1 + 5 * Math.random(),
        ...props,
      });

    const animate = async () => {
      while (true) {
        await shift();
      }
    };

    animate();
  }, []);

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
