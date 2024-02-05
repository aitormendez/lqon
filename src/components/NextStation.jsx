import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { currentStationIndex, isAnimating } from "./stores";
import allStations from "../data/stations.json";
import StationLinks from "./StationLinks";

const NextStation = () => {
  const currentIndex = useStore(currentStationIndex);
  const [nextStationHref, setNextStationHref] = useState("");
  const animating = useStore(isAnimating);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % allStations.length;
    const nextStation = allStations[nextIndex];

    let tipoRuta;
    if (nextStation.tipo === "texto") {
      tipoRuta = "textos";
    } else if (nextStation.tipo === "accion") {
      tipoRuta = "acciones";
    } else {
      // Caso "home"
      tipoRuta = ""; // Ruta raíz para "home"
    }

    const href = tipoRuta ? `/${tipoRuta}/${nextStation.uri}` : "/";
    setNextStationHref(href);
  }, [currentIndex]);

  const goToNextStation = (event) => {
    const videoLogo = document.getElementById("videoLogotipo");

    if (animating) {
      event.preventDefault();
    } else {
      const nextIndex = (currentStationIndex.get() + 1) % allStations.length;
      currentStationIndex.set(nextIndex);
      isAnimating.set(true);
      if (videoLogo) {
        videoLogo.currentTime = 0; // Reinicia el tiempo del video a 0
        videoLogo.play(); // Comienza la reproducción
      }
    }
  };

  const navClasses = animating
    ? "p-[2vw] w-[9vw] h-full bg-white flex pointer-events-none opacity-50"
    : "p-[2vw] w-[9vw] h-full bg-white flex hover:bg-black";

  return (
    <nav id="menu">
      <a
        className={navClasses}
        href={nextStationHref}
        onClick={goToNextStation}
      >
        <svg
          className="fill-red-600"
          viewBox="0 0 32 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.1876 10.9494L11.8997 0.857187L19.1492 0.857141L32 13.4636L19.2206 26L11.9715 26L22.1877 15.978L-8.7616e-07 15.9779L6.31363e-06 10.9494L22.1876 10.9494Z"
          />
        </svg>
      </a>
    </nav>
  );
};

export default NextStation;
