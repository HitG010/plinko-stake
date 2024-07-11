import { HEIGHT, WIDTH, obstacleRadius } from "./constants";
import { pad, unpad } from "./padding";

const MULTIPLIERS = {
  1: 1000,
  2: 130,
  3: 26,
  4: 9,
  5: 4,
  6: 2,
  7: 0.2,
  8: 0.2,
  9: 0.2,
  10: 0.2,
  11: 0.2,
  12: 2,
  13: 4,
  14: 9,
  15: 26,
  16: 130,
  17: 1000,
};

export function createObstacles(rows, spacing) {
  rows = rows + 2;
  const obstacles = [];
  for (let row = 2; row < rows; row++) {
    const numObstackes = row + 1;
    const y = 0 + row * spacing;
    for (let col = 0; col < numObstackes; col++) {
      const x = WIDTH / 2 - spacing * (row / 2 - col);
      //   800 / 2 - 36 * (2/2 - 0) = 800 / 2 - 36 * 1 = 400 - 36 = 364
      //   800 / 2 - 36 * (2/2 - 1) = 800 / 2 - 36 * 0 = 400
      //   800 / 2 - 36 * (2/2 - 2) = 800 / 2 + 36 * 1 = 400 + 36 = 436
      obstacles.push({ x: pad(x), y: pad(y), radius: obstacleRadius });
    }
  }
  console.log(obstacles);
  return obstacles;
}

export function createSinks(NUM_SINKS, spacing) {
  const sinks = [];
  for (let i = 0; i < NUM_SINKS; i++) {
    const x = WIDTH / 2 + (i - NUM_SINKS / 2) * spacing + obstacleRadius;
    const y = HEIGHT - 80;
    const width = spacing;
    const height = width;
    sinks.push({ x, y, width, height, multiplier: MULTIPLIERS[i + 1] });
  }
  return sinks;
}
