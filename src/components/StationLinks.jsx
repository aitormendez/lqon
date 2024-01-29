import { currentStationIndex, isAnimating } from "./stores";
import allStations from "../data/stations.json";

const StationLinks = () => {
  const goToStation = (stationUri) => {
    const stationIndex = allStations.findIndex(
      (station) => station.uri === stationUri
    );
    if (stationIndex !== -1) {
      currentStationIndex.set(stationIndex);
      isAnimating.set(true);
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
        {textoStations.map((station) => (
          <a
            className="block m-2"
            key={station.nombre}
            href={`/textos/${station.uri}`}
            onClick={() => goToStation(station.uri)}
          >
            {station.nombre}
          </a>
        ))}
      </div>

      <div className="inline-block">
        {accionStations.map((station) => (
          <a
            className="block m-2"
            key={station.nombre}
            href={`/acciones/${station.uri}`}
            onClick={() => goToStation(station.uri)}
          >
            {station.nombre}
          </a>
        ))}
      </div>
    </div>
  );
};

export default StationLinks;
