import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useState } from "react";
import Metro from "./Metro";

export const Fiber = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [cameraPositionStart, setCameraPositionStart] = useState(-40);

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  return (
    <>
      <Canvas
        camera={{
          far: 4000,
          position: [cameraPositionStart, 20, 70],
          rotation: [0, 0, 0],
          fov: 20,
        }}
        style={{ height: "30vw" }}
      >
        <Metro
          isAnimating={isAnimating}
          setIsAnimating={setIsAnimating}
          cameraPositionStart={cameraPositionStart}
          setCameraPositionStart={setCameraPositionStart}
        />
        {/* <CameraControls /> */}
        <ambientLight intensity={2} />
      </Canvas>
      <button
        className="text-white p-4 rounded bg-black m-4"
        onClick={handleAnimationStart}
      >
        Start Animation
      </button>
    </>
  );
};

export default Fiber;
