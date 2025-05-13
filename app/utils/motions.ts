import { Variants } from "framer-motion";

const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const fadeInSlideToRight: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.3, ease: defaultEasing },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: defaultEasing },
  },
};

export const fadeInStagger: Variants = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};
