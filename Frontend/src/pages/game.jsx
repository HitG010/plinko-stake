import { useState, useEffect, useRef } from "react";
import { BallManager } from "../game/classes/ballManager";
import { pad } from "../game/padding";
import { WIDTH } from "../game/constants";

export default function Game() {
  const [ballManager, setBallManager] = useState(null);
  const canvasRef = useRef(null);
  let [amount, setAmount] = useState(100);

  useEffect(() => {
    if (canvasRef.current) {
      const newBallManager = new BallManager(canvasRef);
      setBallManager(newBallManager);
    }
  }, [canvasRef]);

  return (
    <>
      <div>
        <h1>Amount : {amount}</h1>
        <canvas
          ref={canvasRef}
          width={"800px"}
          height={"800px"}
          style={{ backgroundColor: "black" }}
        />
        <button
          onClick={async () => {
            setAmount(amount - 10);
            if (ballManager) {
              ballManager.addBall(
                pad(WIDTH / 2 + 72 * (Math.random() - 0.5)),
                pad(50),
                "white"
              );
              setAmount(amount + 100);
            }
          }}
        >
          Add Ball
        </button>
      </div>
    </>
  );
}
