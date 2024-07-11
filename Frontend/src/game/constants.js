import { pad } from "./padding";

export const DECIMAL_MULTIPLIER = 10000;

export const WIDTH = 800;
const HEIGHT = 800;
const ballRadius = 7;
const obstacleRadius = 4;
const gravity = pad(0.2); // 0.2 * DECIMAL_MULTIPLIER
const horizontalFriction = 0.45;
const verticalFriction = 0.7;

export {
  HEIGHT,
  ballRadius,
  obstacleRadius,
  gravity,
  horizontalFriction,
  verticalFriction,
};
