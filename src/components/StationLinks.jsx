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
      solapa.classList.remove("left-0");
      solapa.classList.add("-left-full");
      solapaAbierta.set(false);
    }
  };

  const textoStations = allStations.filter(
    (station) => station.tipo === "texto"
  );

  const accionStations = allStations.filter(
    (station) => station.tipo === "accion"
  );

  return (
    <div className="m-4">
      <div className="inline-block">
        {textoStations.map((station, index) => (
          <a
            className="block m-2"
            key={`${station.nombre}-${index}`}
            href={`/textos/${station.uri}`}
            onClick={(e) => goToStation(station.uri, e)}
          >
            {station.nombre}
          </a>
        ))}
      </div>

      <div className="inline-block">
        {accionStations.map((station, index) => (
          <a
            className="block m-2"
            key={`${station.nombre}-${index}`}
            href={`/acciones/${station.uri}`}
            onClick={(e) => goToStation(station.uri, e)}
          >
            {station.nombre}
          </a>
        ))}
      </div>
    </div>
  );
};

export default StationLinks;
