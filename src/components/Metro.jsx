import { useThree, useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import Anden from "./Anden";

const Metro = ({
  isAnimating,
  setIsAnimating,
  setCameraPositionStart,
  cameraPositionStart,
}) => {
  const { camera } = useThree();
  const isMoving = useRef(false);
  const startTimeRef = useRef(null);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);
  const [lastPositionX, setLastPositionX] = useState(0);
  const [cameraTargetPositionEnd, setCameraTargetPositionEnd] = useState(-540);

  const allStations = [
    {
      id: 1,
      nombre: "Oscar Cabanas",
      materialCartel: "cartel-oscar-cabanas",
      materialPlano: "plano-oscar-cabanas",
    },
    {
      id: 2,
      nombre: "Vorja Encikutao",
      materialCartel: "cartel-vorja-encikutao",
      materialPlano: "plano-vorja-encikutao",
    },
    {
      id: 3,
      nombre: "Taktel",
      materialCartel: "cartel-taktel",
      materialPlano: "plano-taxtel",
    },
    {
      id: 4,
      nombre: "Juan Carlos Gorreta",
      materialCartel: "cartel-juan-carlos-gorreta",
      materialPlano: "plano-juan-carlos-gorreta",
    },
    {
      id: 5,
      nombre: "Vicius",
      materialCartel: "cartel-vicius",
      materialPlano: "plano-vicius",
    },
    {
      id: 6,
      nombre: "Grupo Chasky",
      materialCartel: "cartel-grupo-chasky",
      materialPlano: "plano-grupo-chasky",
    },
    {
      id: 7,
      nombre: "Nono Murcia",
      materialCartel: "cartel-nono-murcia",
      materialPlano: "plano-nono-murcia",
    },
    {
      id: 8,
      nombre: "El Chirly",
      materialCartel: "cartel-el-chirly",
      materialPlano: "plano-el-chirly",
    },
    { id: 9, nombre: "Work Song", materialCartel: "", materialPlano: "" },
    {
      id: 10,
      nombre: "Lucia Montenegro",
      materialCartel: "",
      materialPlano: "",
    },
  ];

  const [stations, setStations] = useState([
    {
      id: 1,
      nombre: "Oscar Cabanas",
      materialCartel: "cartel-oscar-cabanas",
      materialPlano: "plano-oscar-cabanas",
    },
  ]);

  const addStation = () => {
    const newStationIndex = (currentStationIndex + 1) % allStations.length;
    setCurrentStationIndex(newStationIndex);

    const newPositionX = lastPositionX - 500;
    setLastPositionX(newPositionX);

    const newStation = {
      id: `station-${Date.now()}`,
      nombre: allStations[newStationIndex].nombre,
      materialCartel: allStations[newStationIndex].materialCartel,
      materialPlano: allStations[newStationIndex].materialPlano,
      position: [newPositionX, 0, 0],
    };
    setStations((prevStations) => [...prevStations, newStation]);
  };

  const removeFirstStation = () => {
    setStations(stations.slice(1));
  };

  useEffect(() => {}, []);

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
        setIsAnimating(false);
        removeFirstStation(); // Elimina la primera estación
        setCameraPositionStart(cameraPositionStart - 500);
        setCameraTargetPositionEnd(cameraTargetPositionEnd - 500);
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
          materialCartel={station.materialCartel}
          materialPlano={station.materialPlano}
          position={station.position}
        />
      ))}
    </>
  );
};

export default Metro;
