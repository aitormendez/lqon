import { currentStationIndex, isAnimating } from "./stores";
import allStations from "../data/stations.json";
import { solapaAbierta } from "./stores.js";

export function goToStation(stationUri, event) {
  const videoLogo = document.getElementById("videoLogotipo");

  if (isAnimating.get()) {
    event.preventDefault();
  } else {
    const stationIndex = allStations.findIndex(
      (station) => station.uri === stationUri
    );
    currentStationIndex.set(stationIndex);
    isAnimating.set(true);
    videoLogo.currentTime = 0; // Reinicia el tiempo del video a 0
    videoLogo.play(); // Comienza la reproducción
  }

  if (solapaAbierta.value) {
    const solapa = document.getElementById("solapa");
    const burgs = document.querySelectorAll(".burg");
    const flechaCerrar = document.querySelectorAll(".flecha-cerrar");
    burgs.forEach((burg) => {
      burg.classList.remove("hidden");
      burg.classList.add("flex");
    });
    flechaCerrar.forEach((flecha) => {
      flecha.classList.add("hidden");
      flecha.classList.remove("flex");
    });
    solapa.classList.remove("left-0");
    solapa.classList.add("-left-full");
    solapaAbierta.set(false);
  }
}
