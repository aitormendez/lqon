import { useStore } from "@nanostores/react";
import { currentStationIndex, isAnimating } from "./stores";
import allStations from "../data/stations.json";
import StationLinks from "./StationLinks";

const Menu = () => {
  const animating = useStore(isAnimating);

  const handleAnimationStart = () => {
    const nextIndex = (currentStationIndex.get() + 1) % allStations.length;
    currentStationIndex.set(nextIndex);
    isAnimating.set(true);
  };

  return (
    <>
    <button
      className="text-white p-4 rounded bg-black m-4"
      onClick={handleAnimationStart}
    >
      Start Animation
    </button>
    <StationLinks />
    </>
  );
};

export default Menu;
