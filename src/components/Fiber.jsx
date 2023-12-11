import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { CameraControls, Text, Float } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { ACESFilmicToneMapping } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Scene = () => {
  const tornoTorno01 = useRef();

  useEffect(() => {
    console.log(tornoTorno01);
    // tornoTorno01.current.rotation.z = 1;
    tornoTorno01.current.rotation.x = 1;
  }, []);

  useFrame((state, delta) => {
    tornoTorno01.current.rotation.y += delta;
  });
  0;

  const tornoTorno = useLoader(GLTFLoader, "../models/torno-torno.glb");

  return (
    <>
      <directionalLight position={[1, 2, 3]} />

      <primitive ref={tornoTorno01} object={tornoTorno.scene} scale={0.5} />

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
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
};

export default Fiber;
