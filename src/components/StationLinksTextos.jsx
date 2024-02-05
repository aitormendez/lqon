import { currentStationIndex, isAnimating } from "./stores";
import allStations from "../data/stations.json";
import { solapaAbierta } from "./stores.js";

const StationLinks = () => {
  const goToStation = (stationUri, event) => {
    if (isAnimating.get()) {
      event.preventDefault();
    } else {
      const stationIndex = allStations.findIndex(
        (station) => station.uri === stationUri
      );
      if (stationIndex !== -1) {
        currentStationIndex.set(stationIndex);
        isAnimating.set(true);
      }
    }

    if (solapaAbierta.value) {
      const solapa = document.getElementById("solapa");
      console.log(solapa);
      solapa.classList.remove("left-0");
      solapa.classList.add("-left-full");
      solapaAbierta.set(false);
    }
  };

  const textoStations = allStations.filter(
    (station) => station.tipo === "texto"
  );

  return (
    <>
      {textoStations.map((station, index) => (
        <a
          className="block font-bold md:px-20 px-6 border-b py-2 text-white hover:text-red-600 last:border-none"
          key={`${station.nombre}-${index}`}
          href={`/textos/${station.uri}`}
          onClick={(e) => goToStation(station.uri, e)}
        >
          {station.nombre}
        </a>
      ))}
    </>
  );
};

export default StationLinks;
