import { useStore } from "@nanostores/react";
import { currentStationIndex, isAnimating } from "./stores";
import { solapaAbierta } from "./stores.js";
import logotipo from "../assets/video/torno.mp4";
import lqon from "../assets/img/lo-quieras-o-no.svg";

const BtnHome = () => {
  const animating = useStore(isAnimating);

  const goToStation = (stationUri, event) => {
    const videoLogo = document.getElementById("videoLogotipo");

    if (isAnimating.get()) {
      event.preventDefault();
    } else {
      currentStationIndex.set(0);
      isAnimating.set(true);
      videoLogo.currentTime = 0; // Reinicia el tiempo del video a 0
      videoLogo.play(); // Comienza la reproducción
    }

    if (solapaAbierta.value) {
      const solapa = document.getElementById("solapa");
      solapa.classList.remove("left-0");
      solapa.classList.add("-left-full");
      solapaAbierta.set(false);
    }
  };

  const navClasses = animating
    ? "bg-white hover:opacity-80 flex-grow pointer-events-none"
    : "bg-white hover:opacity-80 flex-grow";

  return (
    <>
      <a
        className={navClasses}
        key={"home-0"}
        href={"/"}
        onClick={(e) => goToStation("", e)}
      >
        <video
          id="videoLogotipo"
          className="relative w-[40vw] md:w-[10vw] left-[4vw] md:left-2"
          muted
          playsInline
        >
          <source src={logotipo} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <img
          src={lqon.src}
          className="absolute left-[32vw] md:left-[8vw] top-[9vw] md:top-[2vw] w-[40vw] md:w-[16vw] z-10"
          alt="Lo quieras o no"
        />
      </a>
    </>
  );
};

export default BtnHome;
