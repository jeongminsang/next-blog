"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const items = ["아이템 1", "아이템 2", "아이템 3", "아이템 4", "아이템 5"];

export default function Text() {
  return (
    <motion.ul
      variants={container}
      initial='hidden'
      animate='visible'
      style={{ listStyleType: "none", padding: 0 }}
    >
      {items.map((text, index) => (
        <motion.li key={index} variants={item} style={{ marginBottom: "10px" }}>
          {text}
        </motion.li>
      ))}
    </motion.ul>
  );
}
