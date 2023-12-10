import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Scene = () => {
  const meshRef = useRef();

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <CameraControls makeDefault />
    </>
  );
};

export const Fiber = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
};

export default Fiber;