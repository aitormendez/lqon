import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Scene = () => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    cubeRef.current.rotation.x += delta;
  });

  return (
    <>
      <directionalLight position={[1, 2, 3]} />
      <mesh ref={cubeRef} rotation-y={Math.PI * 0.25}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
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
