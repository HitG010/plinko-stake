import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/ballManager";
import { WIDTH } from "../game/constants";
import { pad } from "../game/padding";

export default function Simulate() {
  const canvasRef = useRef(null);
  let [output, setOutput] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
  });

  async function simulate(ballManager) {
    let i = 0;
    console.log("simulate");
    while (1) {
      i++;
      ballManager.addBall(
        pad(WIDTH / 2 + 72 * (Math.random() - 0.5)),
        pad(50),
        "white"
      );
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }

  useEffect(() => {
    console.log(canvasRef.current, "canvasRef.current");
    if (canvasRef.current) {
      const ballManager = new BallManager(canvasRef, (index, startX) => {
        setOutput((outputs) => {
          return {
            ...outputs,
            [index]: [...outputs[index], startX],
          };
        });
      });
      simulate(ballManager);
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={WIDTH}
        style={{ backgroundColor: "black" }}
      />
      <div>{JSON.stringify(output, null, 2)}</div>
    </div>
  );
}
