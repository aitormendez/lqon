import { useThree, useFrame } from "@react-three/fiber";
import { useCallback, useState, useEffect, useRef } from "react";
import Anden from "./Anden";

const Metro = ({ isAnimating, setIsAnimating }) => {
  const { camera } = useThree();
  const isMoving = useRef(false);
  const startTimeRef = useRef(null);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);

  const allStations = [
    { id: 1, nombre: "Oscar Cabanas" },
    { id: 2, nombre: "Encikutao" },
    { id: 3, nombre: "Taktel" },
  ];

  const [stations, setStations] = useState([
    { id: 1, nombre: "Oscar Cabanas", position: [0, 0, 0] },
  ]);

  const addStation = useCallback(() => {
    const newStationIndex = (currentStationIndex + 1) % allStations.length;
    setCurrentStationIndex(newStationIndex);

    const uniqueId = `station-${Date.now()}`;
    const newPosition = [500, 0, 0];
    const newStation = {
      id: uniqueId,
      nombre: allStations[newStationIndex].nombre,
      position: newPosition,
    };
    setStations((prevStations) => [...prevStations, newStation]);
  }, [currentStationIndex, allStations]);

  const removeFirstStation = () => {
    setStations(stations.slice(1));
  };

  useEffect(() => {
    if (isAnimating && !isMoving.current) {
      addStation();
      startTimeRef.current = null; // Reinicia el tiempo de inicio
      isMoving.current = true; // Comienza el movimiento del tren
    }
  }, [isAnimating]);

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

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  return (
    <>
      {stations.map((station) => (
        <Anden
          key={station.id}
          nombreEstacion={station.nombre}
          position={station.position}
        />
      ))}
    </>
  );
};

export default Metro;
