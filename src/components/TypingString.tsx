"use client";

import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import React, { useEffect } from "react";

function AnimatedString({
  string,
  timeOnLetterInMs,
}: {
  string: string;
  timeOnLetterInMs?: number;
}) {
  const count = useMotionValue(0);
  const str = useTransform(count, (latest) =>
    string.slice(0, Math.ceil(latest))
  );

  const defaultTimeOnLetter = 100;

  // divide by 1000 beacuse we accept time in ms and framer-motion wants in seconds
  const animationDuration =
    ((timeOnLetterInMs || defaultTimeOnLetter) * string.length) / 1000;

  useEffect(() => {
    const controls = animate(count, string.length, {
      ease: "linear",
      duration: animationDuration,
    });
    return controls.stop;
  }, []);

  return <motion.div>{str}</motion.div>;
}

export { AnimatedString };
