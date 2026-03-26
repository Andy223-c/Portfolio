export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y:10 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

export const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

export const slideRight = (delay = 0) => ({
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});