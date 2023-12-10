import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, Text, Float } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { ACESFilmicToneMapping } from "three";

const Scene = () => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    cubeRef.current.rotation.x += delta;
    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle);
  });

  return (
    <>
      <directionalLight position={[1, 2, 3]} />
      <mesh ref={cubeRef} rotation-y={Math.PI * 0.25}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <Float speed={2}>
        <Text font="../fonts/CrimsonPro-Regular.woff" position-z={1}>
          I LOVE R3F
        </Text>
      </Float>

      {/* <CameraControls makeDefault /> */}
    </>
  );
};

export const Fiber = () => {
  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
      }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
};

export default Fiber;
