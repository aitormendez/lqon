import allStations from "../data/stations.json";
import { v4 as uuidv4 } from "uuid";
import {goToStation} from "./goToStation.js"

const StationLinks = () => {
  const textoStations = allStations.filter(
    (station) => station.tipo === "texto"
  );

  return (
    <>
      {textoStations.map((station) => (
        <a
          className="block font-bold md:px-20 px-6 border-b py-2 text-white hover:text-red-600 last:border-none"
          key={uuidv4()}
          href={`/textos/${station.uri}`}
          onClick={(e) => goToStation(station.uri, e)}
        >
          <p className="md:inline">{station.nombre}</p>
          <span className="px-2 hidden md:inline">|</span>
          <p className="font-light md:inline italic">{station.autor} </p>
        </a>
      ))}
    </>
  );
};

export default StationLinks;
