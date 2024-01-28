import { useStore } from "@nanostores/react";
import { currentStationIndex, isAnimating } from "./AnimationStore.jsx";
import allStations from "../data/stations.json";

const Menu = () => {
  const index = useStore(currentStationIndex);
  const animating = useStore(isAnimating);

  const goToNextStation = () => {
    const nextStationIndex = (currentStationIndex + 1) % allStations.length;
    currentStationIndex.set(nextStationIndex);
    isAnimating.set(true);
  };

  return (
    <button
      className="p-6 bg-black rounded m-4 text-white"
      onClick={goToNextStation}
    >
      Siguiente Estación
    </button>
  );
};

export default Menu;
