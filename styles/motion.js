// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.3, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing
    }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
