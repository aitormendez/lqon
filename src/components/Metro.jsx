import { useThree, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import Anden from "./Anden";

const Metro = ({
  isAnimating,
  setIsAnimating,
  addStation,
  removeFirstStation,
  stations,
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
      <Anden scale={1} position={[0, 0, 0]} />
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
