import { DECIMAL_MULTIPLIER } from "./constants";

function pad(num) {
  return num * DECIMAL_MULTIPLIER;
}

function unpad(num) {
  return Math.floor(num / DECIMAL_MULTIPLIER);
}

export { pad, unpad };
