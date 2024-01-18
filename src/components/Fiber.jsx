import { useThree, Canvas, useFrame } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { ACESFilmicToneMapping } from "three";
// import Torno from "./torno";
import Anden from "./Anden";
import { xor } from "three/examples/jsm/nodes/Nodes.js";

const Scene = ({ isAnimating }) => {
  const { camera } = useThree();

  useFrame(({ clock }) => {
    if (isAnimating) {
      const t = clock.getElapsedTime();
      const duration = 10;
      const start = 200;
      const end = -160;

      const x = end * (1 - Math.pow(1 - Math.min(t / duration, 1), 2)) + start;

      camera.position.x = -x;
      camera.rotation.set(0, 0, 0);
    }
  });

  return (
    <>
      <ambientLight intensity={2} />
      <Anden scale={1} position={[0, 0, 0]} />
      {/* <CameraControls makeDefault /> */}
    </>
  );
};

export const Fiber = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <>
      <Canvas
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
        }}
        camera={{ position: [-40, 20, 70], rotation: [0, 0, 0], fov: 20 }}
        style={{ height: "30vw" }}
      >
        <Scene isAnimating={isAnimating} />
      </Canvas>
      <button className="text-white" onClick={() => setIsAnimating(true)}>
        Iniciar Animación
      </button>
    </>
  );
};

export default Fiber;
