import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { useStore } from "@nanostores/react";
import { isAnimating } from "./stores";
import Metro from "./Metro";

export const Fiber = () => {
  const animating = useStore(isAnimating);
  const [cameraPositionStart, setCameraPositionStart] = useState(-40);

  const handleAnimationStart = () => {
    isAnimating.set(true);
  };

  return (
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
        isAnimating={animating}
        cameraPositionStart={cameraPositionStart}
        setCameraPositionStart={setCameraPositionStart}
      />
      {/* <CameraControls /> */}
      <ambientLight intensity={2} />
    </Canvas>
  );
};

export default Fiber;
