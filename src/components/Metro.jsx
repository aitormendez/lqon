import { useThree, useFrame } from "@react-three/fiber";
import { useStore } from "@nanostores/react";
import { currentStationIndex, isAnimating } from "./stores";
import { useState, useEffect, useRef } from "react";
import Anden from "./Anden";
import allStations from "../data/stations.json";

const Metro = ({ cameraPositionStart, setCameraPositionStart }) => {
  const { camera } = useThree();
  const isMoving = useRef(false);
  const startTimeRef = useRef(null);
  const currentIndex = useStore(currentStationIndex);
  const animating = useStore(isAnimating);
  const [lastPositionX, setLastPositionX] = useState(0);
  const [cameraTargetPositionEnd, setCameraTargetPositionEnd] = useState(-540);

  const [stations, setStations] = useState([]);

  useEffect(() => {
    const path = window.location.pathname;
    const stationUri = path.split("/").pop();
    const stationIndex = allStations.findIndex(
      (station) => station.uri === stationUri
    );

    if (stationIndex !== -1) {
      currentStationIndex.set(stationIndex); // Actualiza el store

      const station = allStations[stationIndex];
      setStations([
        {
          id: `station-${Date.now()}`,
          nombre: station.nombre,
          materialCartel: station.materialCartel,
          materialPlano: station.materialPlano,
          tipo: station.tipo,
        },
      ]);
    }
  }, []);

  const addStation = () => {
    const newPositionX = lastPositionX - 500;
    setLastPositionX(newPositionX);

    const newStation = {
      id: `station-${Date.now()}`,
      nombre: allStations[currentIndex].nombre,
      materialCartel: allStations[currentIndex].materialCartel,
      materialPlano: allStations[currentIndex].materialPlano,
      position: [newPositionX, 0, 0],
    };
    setStations((prevStations) => [...prevStations, newStation]);
  };

  const removeFirstStation = () => {
    setStations(stations.slice(1));
  };

  useEffect(() => {
    if (animating && !isMoving.current) {
      addStation();
      startTimeRef.current = null; // Reinicia el tiempo de inicio
      isMoving.current = true; // Comienza el movimiento del tren
    }
  }, [animating, currentIndex]);

  useFrame(({ clock }) => {
    if (isMoving.current) {
      const currentTime = clock.getElapsedTime();
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }
      const elapsedTime = currentTime - startTimeRef.current;

      const duration = 5; // Duración total del viaje
      const halfDuration = duration / 2; // Punto medio para cambiar de aceleración a desaceleración
      const start = cameraPositionStart; // Posición inicial
      const end = cameraTargetPositionEnd; // Posición final

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

      camera.position.x = x;

      // Detener el tren al finalizar la animación
      if (elapsedTime + 0.05 >= duration) {
        isMoving.current = false;
        isAnimating.set(false);
        removeFirstStation(); // Elimina la primera estación
        setCameraPositionStart(cameraPositionStart - 500);
        setCameraTargetPositionEnd(cameraTargetPositionEnd - 500);
      }
    }
  });

  return (
    <>
      {stations.map((station) => (
        <Anden
          key={station.id}
          nombreEstacion={station.nombre}
          materialCartel={station.materialCartel}
          materialPlano={station.materialPlano}
          position={station.position}
        />
      ))}
    </>
  );
};

export default Metro;
