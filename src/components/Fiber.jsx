import { useThree, Canvas, useFrame } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useCallback, useState, useEffect, useRef } from "react";
import { ACESFilmicToneMapping } from "three";
import Anden from "./Anden";
import Metro from "./Metro";

export const Fiber = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [stations, setStations] = useState([
    { id: 1, nombre: "Oscar Cabanas", position: [0, 0, 0] },
  ]);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);

  const estaciones = [
    { id: 1, nombre: "Oscar Cabanas" },
    { id: 2, nombre: "Encikutao" },
    { id: 3, nombre: "Taktel" },
  ];

  const addStation = useCallback(() => {
    const newStationIndex = (currentStationIndex + 1) % estaciones.length;
    setCurrentStationIndex(newStationIndex);

    const uniqueId = `station-${Date.now()}`;
    const newPosition = [500, 0, 0];
    const newStation = {
      id: uniqueId,
      nombre: estaciones[newStationIndex].nombre,
      position: newPosition,
    };
    setStations((prevStations) => [...prevStations, newStation]);
  }, [currentStationIndex, estaciones, setStations]);

  const handleAnimationStart = () => {
    addStation(); // Cambia el nombre antes de iniciar la animación
    setIsAnimating(true);
  };

  const removeFirstStation = () => {
    setStations(stations.slice(1));
  };

  return (
    <>
      <Canvas
        camera={{ position: [-40, 20, 70], rotation: [0, 0, 0], fov: 20 }}
        style={{ height: "30vw" }}
      >
        <Metro
          isAnimating={isAnimating}
          setIsAnimating={setIsAnimating}
          addStation={addStation}
          removeFirstStation={removeFirstStation}
          stations={stations}
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
