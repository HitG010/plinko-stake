import { HEIGHT, WIDTH, obstacleRadius, ballRadius } from "../constants";
import { createObstacles, createSinks } from "../objects";
import { pad, unpad } from "../padding";
import { Ball } from "./ball";

export class BallManager {
  constructor(canvasRef, onFinish) {
    this.balls = [];
    this.canvasRef = canvasRef;
    this.ctx = canvasRef.current.getContext("2d");
    this.obstacles = createObstacles(18, 36);
    this.sinks = createSinks(17, 40);
    this.update();
    this.onFinish = onFinish;
  }

  // add ball
  addBall(x, y, color) {
    console.log("add ball");
    const newBall = new Ball(
      x,
      y,
      ballRadius,
      color,
      this.ctx,
      this.obstacles,
      this.sinks,
      (index) => {
        this.balls = this.balls.filter((ball) => ball !== newBall);
        if (this.onFinish === undefined) return;
        this.onFinish(index, x);
      }
    );
    this.balls.push(newBall);
  }

  drawObstacles() {
    this.ctx.fillStyle = "white";
    this.obstacles.forEach((obstacle) => {
      this.ctx.beginPath();
      this.ctx.arc(
        unpad(obstacle.x),
        unpad(obstacle.y),
        obstacle.radius,
        0,
        Math.PI * 2
      );
      this.ctx.fill();
      this.ctx.closePath();
    });
  }

  getColor(index) {
    if (index < 3 || index >= this.sinks.length - 3) {
      return { background: "#ff003f", color: "white" };
    }
    if (index < 6 || index >= this.sinks.length - 6) {
      return { background: "#ff7f00", color: "white" };
    }
    if (index < 9 || index > this.sinks.length - 9) {
      return { background: "#ffbf00", color: "black" };
    }
    if (index < 12 || index > this.sinks.length - 12) {
      return { background: "#ffff00", color: "black" };
    }
    if (index < 15 || index > this.sinks.length - 15) {
      return { background: "#bfff00", color: "black" };
    }
    return { background: "#7fff00", color: "black" };
  }

  drawSinks() {
    this.ctx.fillStyle = "blue";
    for (let i = 0; i < this.sinks.length; i++) {
      this.ctx.fillStyle = this.getColor(i).background;
      const sink = this.sinks[i];
      this.ctx.font = "normal 13px Arial";
      this.ctx.textAlign = "center";
      this.ctx.fillRect(
        sink.x,
        sink.y - sink.height / 2,
        sink.width - obstacleRadius * 2,
        sink.height
      );
      this.ctx.fillStyle = this.getColor(i).color;
      this.ctx.fillText(
        sink.multiplier.toString() + "x",
        sink.x - 5 + sink.width / 2,
        sink.y
      );
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
    this.drawObstacles();
    this.drawSinks();
    this.balls.forEach((ball) => {
      ball.draw();
      //   console.log("ball drawn");
      ball.update();
    });
  }

  update() {
    this.draw();
    requestAnimationFrame(() => this.update());
  }
}
