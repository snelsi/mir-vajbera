export const getRandomNum = (min = 0, max = 100) =>
  Math.floor(Math.random() * max - min) + min;
