import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useState } from "react";
import Metro from "./Metro";

export const Fiber = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const stations = [
    { id: 1, nombre: "Oscar Cabanas" },
    { id: 2, nombre: "Encikutao" },
    { id: 3, nombre: "Taktel" },
  ];

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  return (
    <>
      <Canvas
        camera={{ position: [-40, 20, 70], rotation: [0, 0, 0], fov: 20 }}
        style={{ height: "30vw" }}
      >
        <Metro
          stations={stations}
          isAnimating={isAnimating}
          setIsAnimating={setIsAnimating}
        />
        {/* <CameraControls makeDefault /> */}
        <ambientLight intensity={2} />
      </Canvas>
      <button
        className="text-white p-4 rounded bg-black m-4"
        onClick={handleAnimationStart}
      >
        Iniciar Animación
      </button>
    </>
  );
};

export default Fiber;
