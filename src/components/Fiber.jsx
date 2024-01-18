import { useThree, Canvas, useFrame } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { ACESFilmicToneMapping } from "three";
// import Torno from "./torno";
import Anden from "./Anden";
import { xor } from "three/examples/jsm/nodes/Nodes.js";

const Scene = ({ isAnimating, addStation, removeFirstStation }) => {
  const { camera } = useThree();
  const [isMoving, setIsMoving] = useState(false);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (isAnimating && !isMoving) {
      addStation(); // Añade una nueva estación
      startTimeRef.current = null; // Reinicia el tiempo de inicio
      setIsMoving(true); // Comienza el movimiento del tren
    }
  }, [isAnimating, addStation, isMoving]);

  useFrame(({ clock }) => {
    if (isMoving) {
      const currentTime = clock.getElapsedTime();
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }
      const elapsedTime = currentTime - startTimeRef.current;

      const duration = 10; // Duración total del viaje
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
      if (elapsedTime >= duration) {
        setIsMoving(false);
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
  const [stations, setStations] = useState([{ id: 1, position: [0, 0, 0] }]);

  const addStation = () => {
    // Calcula la nueva posición de la estación y añade a la lista
    const newPosition = [500, 0, 0];
    const newStation = { id: stations.length + 1, position: newPosition };
    setStations([...stations, newStation]);
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
          <Anden key={station.id} scale={1} position={station.position} />
        ))}
        <Scene
          isAnimating={isAnimating}
          addStation={addStation}
          removeFirstStation={removeFirstStation}
        />
      </Canvas>
      <button
        className="text-white p-4 rounded bg-black m-4"
        onClick={() => setIsAnimating(true)}
      >
        Iniciar Animación
      </button>
    </>
  );
};

export default Fiber;
