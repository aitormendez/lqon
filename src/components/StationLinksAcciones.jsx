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
      currentStationIndex.set(stationIndex);
      isAnimating.set(true);
    }

    if (solapaAbierta.value) {
      const solapa = document.getElementById("solapa");
      console.log(solapa);
      solapa.classList.remove("left-0");
      solapa.classList.add("-left-full");
      solapaAbierta.set(false);
    }
  };

  const accionStations = allStations.filter(
    (station) => station.tipo === "accion"
  );

  return (
    <>
      {accionStations.map((station, index) => (
        <a
          className="block font-bold px-6 md:px-20 border-b py-2 text-white hover:text-red-600 last:border-none"
          key={`${station.nombre}-${index}`}
          href={`/acciones/${station.uri}`}
          onClick={(e) => goToStation(station.uri, e)}
        >
          <p className="md:inline">{station.nombre}</p>
          <span className="px-2 hidden md:inline">|</span>
          <p className="font-light md:inline italic">{station.tema} </p>
        </a>
      ))}
    </>
  );
};

export default StationLinks;
