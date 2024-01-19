import { useThree, Canvas, useFrame } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useCallback, useState, useEffect, useRef } from "react";
import { ACESFilmicToneMapping } from "three";
// import Torno from "./torno";
import Anden from "./Anden";
// import Metro from "./Metro"

const Metro = ({
  isAnimating,
  setIsAnimating,
  addStation,
  removeFirstStation,
}) => {
  const { camera } = useThree();
  const isMoving = useRef(false);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (isAnimating && !isMoving.current) {
      addStation(); // Añade una nueva estación
      startTimeRef.current = null; // Reinicia el tiempo de inicio
      isMoving.current = true; // Comienza el movimiento del tren
    }
  }, [isAnimating, addStation]);

  useFrame(({ clock }) => {
    if (isMoving.current) {
      const currentTime = clock.getElapsedTime();
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }
      const elapsedTime = currentTime - startTimeRef.current;

      const duration = 5; // Duración total del viaje
      const halfDuration = duration / 2; // Punto medio para cambiar de aceleración a desaceleración
      const start = 40; // Posición inicial
      const end = -460; // Posición final

      let x;
      if (elapsedTime < halfDuration) {
        // Fase de aceleración
        x =
          start + ((end - start) * Math.pow(elapsedTime / halfDuration, 2)) / 2;
      } else {
        // Fase de desaceleración
        const t = (elapsedTime - halfDuration) / halfDuration;
        x = end - ((end - start) * Math.pow(1 - t, 2)) / 2;
      }

      camera.position.x = -x;

      // Detener el tren al finalizar la animación
      if (elapsedTime + 0.05 >= duration) {
        isMoving.current = false;
        setIsAnimating(false);
        removeFirstStation(); // Elimina la primera estación
      }
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
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
        }}
        camera={{ position: [-40, 20, 70], rotation: [0, 0, 0], fov: 20 }}
        style={{ height: "30vw" }}
      >
        {stations.map((station) => (
          <Anden
            key={station.id}
            nombreEstacion={station.nombre}
            position={station.position}
          />
        ))}
        <Metro
          isAnimating={isAnimating}
          setIsAnimating={setIsAnimating}
          addStation={addStation}
          removeFirstStation={removeFirstStation}
        />
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
