import { useStore } from "@nanostores/react";
import allStations from "../data/stations.json";

const Menu = () => {


  const goToNextStation = () => {

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
