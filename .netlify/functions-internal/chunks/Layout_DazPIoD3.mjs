import { a as createComponent, b as createAstro, d as addAttribute, r as renderTemplate, f as renderComponent, g as renderHead, m as maybeRenderHead, h as createTransitionScope, e as renderSlot } from './astro/server_Zajxhskx.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useThree, useFrame, Canvas } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { useGLTF, Text } from '@react-three/drei';
import { v4 } from 'uuid';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_CNs7P3E_.mjs';

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/aitor/Documents/Sites/lqon/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$CommonHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CommonHead;
  const { titulo, nombre, tipo } = Astro2.props;
  return renderTemplate`<head><meta charset="UTF-8"><meta name="description" content="Lo quieras o no. Un proyecto de Democracia"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${titulo}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}<link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\"><link rel=\"icon\" type=\"image/png\" sizes=\"48x48\" href=\"/favicon-48x48.png\"><link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\"><link rel=\"manifest\" href=\"/manifest.webmanifest\"><meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"theme-color\" content=\"#000\"><meta name=\"application-name\" content=\"Welcome to Astro Favicons.\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\"><meta name=\"apple-mobile-web-app-title\" content=\"Astro Favicons\"><link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg\" color=\"#000\"><meta name=\"msapplication-TileColor\" content=\"#000\"><meta name=\"msapplication-config\" content=\"/browserconfig.xml\"><link rel=\"yandex-tableau-widget\" href=\"/yandex-browser-manifest.json\"></head>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/CommonHead.astro", void 0);

const currentStationIndex = atom(0);
const isAnimating = atom(false);
const solapaAbierta = atom(false);

const logotipo = "/_astro/torno.DpixmH2e.mp4";

const lqon = new Proxy({"src":"/_astro/lo-quieras-o-no.CTocT1Pe.svg","width":1744,"height":261,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/lo-quieras-o-no.svg";
							}
							
							return target[name];
						}
					});

const BtnHome = () => {
  const animating = useStore(isAnimating);
  const goToStation = (stationUri, event) => {
    const videoLogo = document.getElementById("videoLogotipo");
    if (isAnimating.get()) {
      event.preventDefault();
    } else {
      currentStationIndex.set(0);
      isAnimating.set(true);
      videoLogo.currentTime = 0;
      videoLogo.play();
    }
    if (solapaAbierta.value) {
      const solapa = document.getElementById("solapa");
      solapa.classList.remove("left-0");
      solapa.classList.add("-left-full");
      solapaAbierta.set(false);
    }
  };
  const navClasses = animating ? "bg-white hover:opacity-80 flex-grow pointer-events-none" : "bg-white hover:opacity-80 flex-grow";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "a",
    {
      className: navClasses,
      href: "/",
      onClick: (e) => goToStation("", e),
      children: [
        /* @__PURE__ */ jsxs(
          "video",
          {
            id: "videoLogotipo",
            className: "relative w-[40vw] md:w-[10vw] left-[4vw] md:left-2",
            muted: true,
            playsInline: true,
            children: [
              /* @__PURE__ */ jsx("source", { src: logotipo, type: "video/mp4" }),
              "Tu navegador no soporta videos."
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: lqon.src,
            className: "absolute left-[32vw] md:left-[8vw] top-[9vw] md:top-[2vw] w-[40vw] md:w-[16vw] z-10",
            alt: "Lo quieras o no"
          }
        )
      ]
    },
    "home-0"
  ) });
};

function Anden({
  nombreEstacion,
  materialPlano,
  materialCartel,
  tipo,
  ...props
}) {
  const { nodes, materials } = useGLTF("../models/anden.glb");
  let nombres = [];
  for (let i = 0; i < 7; i++) {
    nombres.push(
      /* @__PURE__ */ jsx(
        Text,
        {
          position: [i * 60 - 190, 22.2, -6.4],
          "rotation-x": 0.4,
          font: "../fonts/helveue-bold-webfont.woff",
          fontSize: 1.5,
          color: "#AC0000",
          textAlign: "left",
          children: nombreEstacion
        },
        `nombre-${i}`
      )
    );
  }
  return /* @__PURE__ */ jsxs("group", { ...props, dispose: null, children: [
    nombres,
    /* @__PURE__ */ jsx("mesh", { position: [-250, 18, -14.8], material: materials.negro, children: /* @__PURE__ */ jsx("boxGeometry", { args: [100, 60, 40] }) }),
    /* @__PURE__ */ jsx("mesh", { position: [250, 18, -14.8], material: materials.negro, children: /* @__PURE__ */ jsx("boxGeometry", { args: [100, 60, 40] }) }),
    /* @__PURE__ */ jsx(
      "mesh",
      {
        geometry: nodes.anden.geometry,
        material: materials["baked.suelo"]
      }
    ),
    /* @__PURE__ */ jsx(
      "mesh",
      {
        geometry: nodes.pared.geometry,
        material: tipo === "accion" ? materials["baked.pared"] : materials["baked.pared-sin-cartel"],
        position: [0, 9.5, -10]
      }
    ),
    /* @__PURE__ */ jsx(
      "mesh",
      {
        geometry: nodes.pasillo.geometry,
        material: materials["baked.pasillo"]
      }
    ),
    /* @__PURE__ */ jsx(
      "mesh",
      {
        geometry: nodes.soportes.geometry,
        material: materials.negro,
        position: [86.607, 22.256, -55.019]
      }
    ),
    /* @__PURE__ */ jsx(
      "mesh",
      {
        geometry: nodes.banco.geometry,
        material: materials.banco,
        position: [-151.306, 13.101, -8.752]
      }
    ),
    tipo === "accion" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "mesh",
        {
          geometry: nodes.cartelmarco.geometry,
          material: materials.negro
        }
      ),
      /* @__PURE__ */ jsx(
        "mesh",
        {
          geometry: nodes.cartelcartel001.geometry,
          material: materials[materialCartel],
          position: [0, 0, 0.08]
        }
      ),
      /* @__PURE__ */ jsx(
        "mesh",
        {
          geometry: nodes.mapamarco.geometry,
          material: materials["marco.plano"],
          position: [0, 0, -1.351]
        }
      ),
      /* @__PURE__ */ jsx(
        "mesh",
        {
          geometry: nodes.mapamapa001.geometry,
          material: materials[materialPlano],
          position: [0, 0, -0.572]
        }
      )
    ] })
  ] });
}
useGLTF.preload("../models/anden.glb");

const allStations = [
	{
		nombre: "Lo quieras o no",
		materialCartel: "",
		materialPlano: "",
		tipo: "home",
		uri: ""
	},
	{
		nombre: "Presentación",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "presentacion",
		autor: "Democracia"
	},
	{
		nombre: "Deriva psicogeográfica 1",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "una-deriva-psicogeografica-por-el-metro-de-madrid",
		autor: ""
	},
	{
		nombre: "Qué no es la psicogeografía",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "que-no-es-la-psicogeografia",
		autor: "Luis Navarro"
	},
	{
		nombre: "Oscar Cabanas",
		materialCartel: "cartel-oscar-cabanas",
		materialPlano: "plano-oscar-cabanas",
		tipo: "accion",
		uri: "oscar-cabanas",
		tema: "Mandamás"
	},
	{
		nombre: "Deriva psicogeográfica 2",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "no-lugar",
		autor: ""
	},
	{
		nombre: "Vorja Enzikutao",
		materialCartel: "cartel-vorja-encikutao",
		materialPlano: "plano-vorja-encikutao",
		tipo: "accion",
		uri: "vorja-encikutao",
		tema: "La mala reputación"
	},
	{
		nombre: "La muerte…",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "la-muerte-declara-la-guerra-a-los-gendarmes",
		autor: "Georges Brassens"
	},
	{
		nombre: "Deriva psicogeográfica 3",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "la-comunidad",
		autor: ""
	},
	{
		nombre: "Taktel",
		materialCartel: "cartel-taktel",
		materialPlano: "plano-taxtel",
		tipo: "accion",
		uri: "taktel",
		tema: "Reacción en cadena"
	},
	{
		nombre: "Canciones de trabajo",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "canciones-de-trabajo",
		autor: "Daniel Villegas"
	},
	{
		nombre: "Deriva psicogeográfica 4",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "juglaria",
		autor: ""
	},
	{
		nombre: "Juan Carlos Gorreta",
		materialCartel: "cartel-juan-carlos-gorreta",
		materialPlano: "plano-juan-carlos-gorreta",
		tipo: "accion",
		uri: "juan-carlos-gorreta",
		tema: "La vida de los esclavos en el S. XXI"
	},
	{
		nombre: "Deriva psicogeográfica 5",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "resonancias",
		autor: ""
	},
	{
		nombre: "Vicius",
		materialCartel: "cartel-vicius",
		materialPlano: "plano-vicius",
		tipo: "accion",
		uri: "vicius",
		tema: "Vacaciones en España"
	},
	{
		nombre: "Deriva psicogeográfica 6",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "psico-6",
		autor: ""
	},
	{
		nombre: "Grupo Chasky",
		materialCartel: "cartel-grupo-chasky",
		materialPlano: "plano-grupo-chasky",
		tipo: "accion",
		uri: "grupo-chasky",
		tema: "Movimiento indígena"
	},
	{
		nombre: "Resistencia indígena",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "migracion-y-resistencia-indigena",
		autor: "Luis Duno-Gottberg"
	},
	{
		nombre: "Nono Murcia",
		materialCartel: "cartel-nono-murcia",
		materialPlano: "plano-nono-murcia",
		tipo: "accion",
		uri: "nono-murcia",
		tema: "Fandangos"
	},
	{
		nombre: "Tradición, industria, resistencia",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "folclore",
		autor: "Mabel Quiñones"
	},
	{
		nombre: "El Chirly",
		materialCartel: "cartel-el-chirly",
		materialPlano: "plano-el-chirly",
		tipo: "accion",
		uri: "el-chirly",
		tema: "Están cayendo bombas en Madrid"
	},
	{
		nombre: "Deriva psicogeográfica 7",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "psico-7",
		autor: ""
	},
	{
		nombre: "Briana Weapons",
		materialCartel: "cartel-briana-weapons",
		materialPlano: "plano-briana-weapons",
		tipo: "accion",
		uri: "briana-weapons",
		tema: "La canción del trabajo"
	},
	{
		nombre: "Deriva psicogeográfica 8",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "trabajo",
		autor: ""
	},
	{
		nombre: "Lucia Montenegro",
		materialCartel: "cartel-lucia-montenegro",
		materialPlano: "plano-lucia-montenegro",
		tipo: "accion",
		uri: "lucia-montenegro",
		tema: "Casas de cartón"
	},
	{
		nombre: "Casas de cartón",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "casas-de-carton",
		autor: "Luis Duno-Gottberg"
	},
	{
		nombre: "Deriva psicogeográfica 9",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "post-logo",
		autor: ""
	}
];

const Metro = ({ cameraPositionStart, setCameraPositionStart }) => {
  const { camera } = useThree();
  const isMoving = useRef(false);
  const startTimeRef = useRef(null);
  const currentIndex = useStore(currentStationIndex);
  const animating = useStore(isAnimating);
  const [lastPositionX, setLastPositionX] = useState(0);
  const [cameraTargetPositionEnd, setCameraTargetPositionEnd] = useState(-540);
  const [stations, setStations] = useState([]);
  useEffect(() => {
    const path = window.location.pathname;
    let stationIndex;
    if (path === "/") {
      stationIndex = 0;
    } else {
      const stationUri = path.split("/").pop();
      stationIndex = allStations.findIndex(
        (station) => station.uri === stationUri
      );
    }
    if (stationIndex !== -1) {
      currentStationIndex.set(stationIndex);
      const station = allStations[stationIndex];
      setStations([
        {
          id: v4(),
          nombre: station.nombre,
          materialCartel: station.materialCartel,
          materialPlano: station.materialPlano,
          tipo: station.tipo
        }
      ]);
    }
  }, []);
  const addStation = () => {
    const newPositionX = lastPositionX - 500;
    setLastPositionX(newPositionX);
    const newStation = {
      id: v4(),
      nombre: allStations[currentIndex].nombre,
      materialCartel: allStations[currentIndex].materialCartel,
      materialPlano: allStations[currentIndex].materialPlano,
      position: [newPositionX, 0, 0],
      tipo: allStations[currentIndex].tipo
    };
    setStations((prevStations) => [...prevStations, newStation]);
  };
  const removeFirstStation = () => {
    setStations(stations.slice(1));
  };
  useEffect(() => {
    if (animating && !isMoving.current) {
      addStation();
      startTimeRef.current = null;
      isMoving.current = true;
    }
  }, [animating, currentIndex]);
  useFrame(({ clock }) => {
    if (isMoving.current) {
      const currentTime = clock.getElapsedTime();
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }
      const elapsedTime = currentTime - startTimeRef.current;
      const duration = 5;
      const halfDuration = duration / 2;
      const start = cameraPositionStart;
      const end = cameraTargetPositionEnd;
      let x;
      if (elapsedTime < halfDuration) {
        x = start + (end - start) * Math.pow(elapsedTime / halfDuration, 2) / 2;
      } else {
        const t = (elapsedTime - halfDuration) / halfDuration;
        x = end - (end - start) * Math.pow(1 - t, 2) / 2;
      }
      camera.position.x = x;
      if (elapsedTime + 0.05 >= duration) {
        isMoving.current = false;
        isAnimating.set(false);
        removeFirstStation();
        setCameraPositionStart(cameraPositionStart - 500);
        setCameraTargetPositionEnd(cameraTargetPositionEnd - 500);
      }
    }
  });
  return /* @__PURE__ */ jsx(Fragment, { children: stations.map((station) => /* @__PURE__ */ jsx(
    Anden,
    {
      nombreEstacion: station.nombre,
      materialCartel: station.materialCartel,
      materialPlano: station.materialPlano,
      position: station.position,
      tipo: station.tipo
    },
    station.id
  )) });
};

function Fiber() {
  if (typeof window === "undefined") return null;
  const animating = useStore(isAnimating);
  const [cameraPositionStart, setCameraPositionStart] = useState(-40);
  return /* @__PURE__ */ jsxs(
    Canvas,
    {
      camera: { far: 4e3, position: [cameraPositionStart, 20, 70], fov: 20 },
      style: { height: "30vw" },
      children: [
        /* @__PURE__ */ jsx(
          Metro,
          {
            isAnimating: animating,
            cameraPositionStart,
            setCameraPositionStart
          }
        ),
        /* @__PURE__ */ jsx("ambientLight", { intensity: 2 })
      ]
    }
  );
}

const $$BtnMenu = createComponent(($$result, $$props, $$slots) => {
  const baseClass = "bg-white h-1/2 md:h-full hover:bg-black transition-opacity grow flex justify-center";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`burger  ${baseClass}`, "class")}> <div class="burg h-full w-full flex flex-col justify-center gap-[1vw] md:gap-[0.5vw] md:w-[10vw] items-center p-[4vw] md:p-[2vw]"> <i class="block bg-red-600 w-[8vw] md:w-[3vw] h-[1.3vw] md:h-[0.7vw]"></i> <i class="block bg-red-600 w-[8vw] md:w-[3vw] h-[1.3vw] md:h-[0.7vw]"></i> <i class="block bg-red-600 w-[8vw] md:w-[3vw] h-[1.3vw] md:h-[0.7vw]"></i> </div> <div class="flecha-cerrar hidden h-full w-full flex-col justify-center md:w-[9vw] p-[6vw] md:p-[2vw]"> <svg class="fill-red-600 w-full rotate-180" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1876 10.9494L11.8997 0.857187L19.1492 0.857141L32 13.4636L19.2206 26L11.9715 26L22.1877 15.978L-8.7616e-07 15.9779L6.31363e-06 10.9494L22.1876 10.9494Z"></path> </svg> </div> </button> `;
}, "/Users/aitor/Documents/Sites/lqon/src/components/BtnMenu.astro", void 0);

function goToStation(stationUri, event) {
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

const StationLinks$1 = () => {
  const accionStations = allStations.filter(
    (station) => station.tipo === "accion"
  );
  return /* @__PURE__ */ jsx(Fragment, { children: accionStations.map((station, index) => /* @__PURE__ */ jsxs(
    "a",
    {
      className: "block font-bold px-6 md:px-20 border-b py-2 text-white hover:text-red-600 last:border-none",
      href: `/acciones/${station.uri}`,
      onClick: (e) => goToStation(station.uri, e),
      children: [
        /* @__PURE__ */ jsx("p", { className: "md:inline", children: station.nombre }),
        /* @__PURE__ */ jsx("span", { className: "px-2 hidden md:inline", children: "|" }),
        /* @__PURE__ */ jsxs("p", { className: "font-light md:inline italic", children: [
          station.tema,
          " "
        ] })
      ]
    },
    v4()
  )) });
};

const StationLinks = () => {
  const textoStations = allStations.filter(
    (station) => station.tipo === "texto"
  );
  return /* @__PURE__ */ jsx(Fragment, { children: textoStations.map((station) => /* @__PURE__ */ jsxs(
    "a",
    {
      className: "block font-bold md:px-20 px-6 border-b py-2 text-white hover:text-red-600 last:border-none",
      href: `/textos/${station.uri}`,
      onClick: (e) => goToStation(station.uri, e),
      children: [
        /* @__PURE__ */ jsx("p", { className: "md:inline", children: station.nombre }),
        /* @__PURE__ */ jsx("span", { className: "px-2 hidden md:inline", children: "|" }),
        /* @__PURE__ */ jsxs("p", { className: "font-light md:inline italic", children: [
          station.autor,
          " "
        ] })
      ]
    },
    v4()
  )) });
};

const $$Solapa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="solapa" class="absolute md:fixed bg-black w-full min-h-full -left-full z-50 top-0 transition-all duration-1000 flex"> <div class="flex flex-col md:flex-row md:gap-6 w-full"> <div class="textos md:w-1/2"> <div class="text-3xl md:text-[3vw] text-center mt-12 md:mt-[5vw] mb-8 md:mb-[3vw] font-bold">
Acciones
</div> <div class="md:text-[1.2vw]"> ${renderComponent($$result, "StationLinksAcciones", StationLinks$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/StationLinksAcciones", "client:component-export": "default" })} </div> </div> <div class="acciones md:w-1/2"> <div class="text-3xl md:text-[3vw] text-center mt-12 md:mt-[5vw] mb-8 md:mb-[3vw] font-bold">
Textos
</div> <div class="md:text-[1.2vw]"> ${renderComponent($$result, "StationLinksTextos", StationLinks, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/StationLinksTextos", "client:component-export": "default" })} </div> </div> </div> ${renderComponent($$result, "BtnMenu", $$BtnMenu, {})} </nav>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/Solapa.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> <div id="banner" class="flex gap-[2vw] md:gap-[1vw] justify-between"> ${renderComponent($$result, "BtnHome", BtnHome, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/BtnHome.jsx", "client:component-export": "default" })} <div class="flex gap-[2vw] md:gap-[1vw] flex-col md:flex-row w-[20vw] md:w-none justify-between"> ${renderComponent($$result, "BtnMenu", $$BtnMenu, {})} ${renderComponent($$result, "BtnNextStation", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/BtnNextStation.jsx", "client:component-export": "default" })} </div> </div> ${renderComponent($$result, "Fiber", Fiber, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/Fiber.jsx", "client:component-export": "default" })} ${renderComponent($$result, "Solapa", $$Solapa, {})} </header>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/Header.astro", "self");

const logoAyto = new Proxy({"src":"/_astro/firma_area_cultura turismo deporte_horizontal_blanco.B7TWRZkx.png","width":1189,"height":134,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/firma_area_cultura turismo deporte_horizontal_blanco.png";
							}
							
							return target[name];
						}
					});

const logoDemocracia = new Proxy({"src":"/_astro/logotipo-democracia.CvRBOYwb.svg","width":158,"height":176,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/logotipo-democracia.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="footer" class="bg-black flex flex-col p-6 items-center"> <div class="mt-20 w-[200px]"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full", "src": logoDemocracia, "alt": "Logotipo Democracia" })} </div> <p class="text-bold mt-6 mb-20 pb-16 text-center text-lg">Un proyecto de Democracia</p> <div class=" max-w-[250px]"> <p class="text-neutral-600 text-center mb-6 text-sm">Proyecto realizado con el apoyo del programa de Ayudas a la creación contemporánea del Ayuntamiento de Madrid 2022/2023.</p> ${renderComponent($$result, "Image", $$Image, { "class": "", "src": logoAyto, "alt": "Logotipo Cultura y Deporte Ayuntamiento de Madrid" })} </div> </div>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titulo, nombre, tipo } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "CommonHead", $$CommonHead, { "tipo": tipo, "nombre": nombre })}${maybeRenderHead()}<body class="text-white"> ${renderComponent($$result, "Header", $$Header, {})} <main class="font-serif flex flex-col items-center px-6 md:px-0 pb-20"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}   </body> </html>`;
}, "/Users/aitor/Documents/Sites/lqon/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
