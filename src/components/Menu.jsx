import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { currentStationIndex, isAnimating } from "./stores";
import allStations from "../data/stations.json";
import StationLinks from "./StationLinks";

const Menu = () => {
  const currentIndex = useStore(currentStationIndex);
  const [nextStationHref, setNextStationHref] = useState("");

  useEffect(() => {
    const updateHref = () => {
      const nextIndex = (currentIndex + 1) % allStations.length;
      const nextStation = allStations[nextIndex];

      const tipoRuta = nextStation.tipo === "texto" ? "textos" : "acciones";
      const href = `/${tipoRuta}/${nextStation.uri}`;
      setNextStationHref(href);
    };

    updateHref();

    const subscription = currentStationIndex.subscribe(updateHref);

    return () => subscription();
  }, [currentIndex]);

  const goToNextStation = () => {
    const nextIndex = (currentIndex + 1) % allStations.length;
    currentStationIndex.set(nextIndex);
    isAnimating.set(true);
  };

  return (
    <>
      <a
        className="inline-block text-white p-4 rounded bg-black m-4"
        href={nextStationHref}
        onClick={goToNextStation}
      >
        Próxima estación
      </a>
      <StationLinks />
    </>
  );
};

export default Menu;
