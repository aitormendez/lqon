import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { CameraControls, Text, Float } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { ACESFilmicToneMapping, Euler } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Torno from "./torno";

const Scene = () => {
  const tornoTorno01 = useRef();
  const tornoCuerpo01 = useRef();

//   useEffect(() => {
//     console.log(tornoTorno01);
//     tornoTorno01.current.rotation.z = 2.36;
//     // tornoTorno01.current.rotation.x = 1;
//   }, []);

//   useFrame((state, delta) => {
//     tornoTorno01.current.rotateY(delta);
//   });
//   0;

  const tornoTorno = useLoader(GLTFLoader, "../models/torno-torno.glb");
  const tornoCuerpo = useLoader(GLTFLoader, "../models/torno-cuerpo.glb");

  return (
    <>
      <directionalLight castShadow position={[-1, 2, -2]} intensity={10} />


      {/* <primitive
        castShadow
        receiveShadow
        ref={tornoTorno01}
        object={tornoTorno.scene}
        position={[-0.15, 0.8, 0]}
        scale={0.5}
      />

      <primitive
        castShadow
        ref={tornoCuerpo01}
        object={tornoCuerpo.scene}
        scale={0.5}
      /> */}

      <Torno scale={0.5} />

      <mesh receiveShadow rotation-x={-Math.PI * 0.5} scale={100}>
        <planeGeometry />
        <meshStandardMaterial color="white" />
      </mesh>

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
