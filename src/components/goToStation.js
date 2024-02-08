import { currentStationIndex, isAnimating } from "./stores";
import allStations from "../data/stations.json";
import { solapaAbierta } from "./stores.js";

export function goToStation(stationUri, event) {
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
}
