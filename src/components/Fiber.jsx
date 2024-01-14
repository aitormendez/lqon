import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { CameraControls, Text, Float } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { ACESFilmicToneMapping, Euler } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import Torno from "./torno";
import Anden from "./Anden";

const Scene = () => {
  const torno01 = useRef();

  return (
    <>
      <ambientLight intensity={2} />

      <Anden scale={0.5} position={[-50, 0, 0]} />
      <CameraControls makeDefault />
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
      shadows
      camera={{ position: [-70, 9.5, 30], fov: 20, rotation: [0, 0, 0] }}
      style={{ height: "30vw" }}
    >
      <Scene />
    </Canvas>
  );
};

export default Fiber;
