import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { currentStationIndex, isAnimating } from "./stores";
import allStations from "../data/stations.json";
import StationLinks from "./StationLinks";

const Menu = () => {
  const currentIndex = useStore(currentStationIndex);
  const [nextStationHref, setNextStationHref] = useState("");
  const animating = useStore(isAnimating);

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

  const goToNextStation = (event) => {
    if (animating) {
      event.preventDefault();
    } else {
      const nextIndex = (currentStationIndex.get() + 1) % allStations.length;
      currentStationIndex.set(nextIndex);
      isAnimating.set(true);
    }
  };

  const navClasses = animating ? "pointer-events-none text-slate-400" : "";

  return (
    <nav id="menu" className={navClasses}>
      <a
        className="inline-block p-4 rounded bg-black m-4"
        href={nextStationHref}
        onClick={goToNextStation}
      >
        Próxima estación
      </a>
      <StationLinks />
    </nav>
  );
};

export default Menu;
