import '@astrojs/internal-helpers/path';
/* empty css                                   */
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as createTransitionScope, l as renderSlot, _ as __astro_tag_component__, F as Fragment$1, n as createVNode } from '../astro_N4Ixt6P6.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_UjCbKZyA.mjs';
import 'clsx';
import 'kleur/colors';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useThree, useFrame, Canvas } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';
import { v4 } from 'uuid';

const $$Astro$8 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/aitor/Documents/Sites/lqon/node_modules/astro/components/Image.astro", void 0);

const $$Astro$7 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/aitor/Documents/Sites/lqon/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/aitor/Documents/Sites/lqon/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$6 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/aitor/Documents/Sites/lqon/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro();
const $$CommonHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CommonHead;
  const { titulo, nombre, tipo } = Astro2.props;
  return renderTemplate`<head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${titulo}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/CommonHead.astro", void 0);

const currentStationIndex = atom(0);
const isAnimating = atom(false);
const solapaAbierta = atom(false);

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
		autor: "Luis Navarro"
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
		autor: "Luis Navarro"
	},
	{
		nombre: "Vorja Encikutao",
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
		autor: "Luis Navarro"
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
		nombre: "Juan Carlos Gorreta",
		materialCartel: "cartel-juan-carlos-gorreta",
		materialPlano: "plano-juan-carlos-gorreta",
		tipo: "accion",
		uri: "juan-carlos-gorreta",
		tema: "La vida de los esclavos en el S. XXI"
	},
	{
		nombre: "Deriva psicogeográfica 4",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "juglaria",
		autor: "Luis Navarro"
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
		nombre: "Punk",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "punk",
		autor: "Democracia"
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
		nombre: "Resistencias migrantes",
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
		nombre: "Folclore",
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
		nombre: "Deriva psicogeográfica 5",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "resonancias",
		autor: "Luis Navarro"
	},
	{
		nombre: "Briana Weapons",
		materialCartel: "",
		materialPlano: "",
		tipo: "accion",
		uri: "briana-weapons",
		tema: ""
	},
	{
		nombre: "Lucia Montenegro",
		materialCartel: "",
		materialPlano: "",
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
		nombre: "Post logo",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "post-logo",
		autor: "Luis Navarro"
	}
];

const BtnNextStation = () => {
  const currentIndex = useStore(currentStationIndex);
  const [nextStationHref, setNextStationHref] = useState("");
  const animating = useStore(isAnimating);
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % allStations.length;
    const nextStation = allStations[nextIndex];
    let tipoRuta;
    if (nextStation.tipo === "texto") {
      tipoRuta = "textos";
    } else if (nextStation.tipo === "accion") {
      tipoRuta = "acciones";
    } else {
      tipoRuta = "";
    }
    const href = tipoRuta ? `/${tipoRuta}/${nextStation.uri}` : "/";
    setNextStationHref(href);
  }, [currentIndex]);
  const goToNextStation = (event) => {
    const videoLogo = document.getElementById("videoLogotipo");
    if (animating) {
      event.preventDefault();
    } else {
      const nextIndex = (currentStationIndex.get() + 1) % allStations.length;
      currentStationIndex.set(nextIndex);
      isAnimating.set(true);
      if (videoLogo) {
        videoLogo.currentTime = 0;
        videoLogo.play();
      }
    }
  };
  const navClasses = animating ? "px-[6vw] md:px-[2vw] md:w-[9vw] h-1/2 md:h-full bg-white flex pointer-events-none opacity-50" : "px-[6vw] md:px-[2vw] md:w-[9vw] h-1/2 md:h-full bg-white flex md:hover:bg-black";
  return /* @__PURE__ */ jsx("a", { className: navClasses, href: nextStationHref, onClick: goToNextStation, children: /* @__PURE__ */ jsx(
    "svg",
    {
      className: "fill-red-600 w-full",
      viewBox: "0 0 32 26",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22.1876 10.9494L11.8997 0.857187L19.1492 0.857141L32 13.4636L19.2206 26L11.9715 26L22.1877 15.978L-8.7616e-07 15.9779L6.31363e-06 10.9494L22.1876 10.9494Z"
        }
      )
    }
  ) });
};

const logotipo = "/_astro/torno.6YsZh9no.mp4";

const lqon = new Proxy({"src":"/_astro/lo-quieras-o-no.k6HE9T3j.svg","width":1744,"height":261,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
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
  const navClasses = animating ? "bg-white flex-grow pointer-events-none" : "bg-white flex-grow";
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

const Fiber = () => {
  const animating = useStore(isAnimating);
  const [cameraPositionStart, setCameraPositionStart] = useState(-40);
  return /* @__PURE__ */ jsxs(
    Canvas,
    {
      camera: {
        far: 4e3,
        position: [cameraPositionStart, 20, 70],
        rotation: [0, 0, 0],
        fov: 20
      },
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
};

const $$Astro$4 = createAstro();
const $$BtnMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BtnMenu;
  const baseClass = "bg-white h-1/2 md:h-full p-[4vw] md:p-[2vw] flex flex-col justify-center gap-[1vw] md:gap-[0.5vw] md:w-[10vw] items-center hover:bg-black";
  return renderTemplate`${maybeRenderHead()}<button id="burger"${addAttribute(`${baseClass}`, "class")}> <i class="block bg-red-600 w-[8vw] md:w-[3vw] h-[1.3vw] md:h-[0.7vw]"></i> <i class="block bg-red-600 w-[8vw] md:w-[3vw] h-[1.3vw] md:h-[0.7vw]"></i> <i class="block bg-red-600 w-[8vw] md:w-[3vw] h-[1.3vw] md:h-[0.7vw]"></i> </button> `;
}, "/Users/aitor/Documents/Sites/lqon/src/components/BtnMenu.astro", void 0);

const StationLinks$1 = () => {
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
    `${station.nombre}-${index}`
  )) });
};

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
  return /* @__PURE__ */ jsx(Fragment, { children: textoStations.map((station, index) => /* @__PURE__ */ jsxs(
    "a",
    {
      className: "block font-bold md:px-20 px-6 border-b py-2 text-white hover:text-red-600 last:border-none",
      href: `/textos/${station.uri}`,
      onClick: (e) => goToStation(station.uri, e),
      children: [
        /* @__PURE__ */ jsx("p", { className: "md:inline", children: station.nombre }),
        /* @__PURE__ */ jsx("span", { className: "px-2", children: "|" }),
        /* @__PURE__ */ jsxs("p", { className: "font-light md:inline italic", children: [
          station.autor,
          " "
        ] })
      ]
    },
    `${station.nombre}-${index}`
  )) });
};

const $$Astro$3 = createAstro();
const $$Solapa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Solapa;
  return renderTemplate`${maybeRenderHead()}<nav id="solapa" class="absolute bg-black w-full min-h-full -left-full z-50 top-0 transition-all duration-1000 flex flex-col md:flex-row md:gap-6"> <div class="textos md:w-1/2"> <div class="text-3xl md:text-[3vw] text-center mt-12 md:mt-[5vw] mb-8 md:mb-[3vw] font-bold">
Acciones
</div> <div class="md:text-[1.2vw]"> ${renderComponent($$result, "StationLinksAcciones", StationLinks$1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/StationLinksAcciones", "client:component-export": "default" })} </div> </div> <div class="acciones md:w-1/2"> <div class="text-3xl md:text-[3vw] text-center mt-12 md:mt-[5vw] mb-8 md:mb-[3vw] font-bold">
Textos
</div> <div class="md:text-[1.2vw]"> ${renderComponent($$result, "StationLinksTextos", StationLinks, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/StationLinksTextos", "client:component-export": "default" })} </div> </div> </nav>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/Solapa.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> <div id="banner" class="flex gap-[2vw] md:gap-[1vw] justify-between"> ${renderComponent($$result, "BtnHome", BtnHome, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/BtnHome.jsx", "client:component-export": "default" })} <div class="flex gap-[2vw] md:gap-[1vw] flex-col md:flex-row w-[20vw] md:w-none justify-between"> ${renderComponent($$result, "BtnMenu", $$BtnMenu, {})} ${renderComponent($$result, "BtnNextStation", BtnNextStation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/BtnNextStation.jsx", "client:component-export": "default" })} </div> </div> ${renderComponent($$result, "Fiber", Fiber, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/Fiber.jsx", "client:component-export": "default" })} ${renderComponent($$result, "Solapa", $$Solapa, {})} </header>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/Header.astro", "self");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titulo, nombre, tipo } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "CommonHead", $$CommonHead, { "tipo": tipo, "nombre": nombre })}${maybeRenderHead()}<body class="text-white"> ${renderComponent($$result, "Header", $$Header, {})} <main class="font-serif flex flex-col items-center px-6 md:px-0 pb-20"> ${renderSlot($$result, $$slots["default"])} </main>   </body> </html>`;
}, "/Users/aitor/Documents/Sites/lqon/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Prose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Prose;
  return renderTemplate`${maybeRenderHead()}<div class="prose prose-lqon prose-h1:text-5xl prose-h1:font-light prose-h2:font-light prose-h2:text-4xl prose-p:text-2xl
  prose-a:text-blue-600 prose-img:rounded-xl prose-h1:my-12 prose-h2:my-10"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/Prose.astro", void 0);

const frontmatter = {
  "tipo": "accion",
  "autor": "Briana Weapons",
  "titulo": ""
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$Layout, {
    titulo: frontmatter.titulo,
    tipo: frontmatter.tipo,
    autor: frontmatter.autor,
    children: [createVNode($$Prose, {
      children: createVNode("h1", {
        children: frontmatter.autor
      })
    }), createVNode("div", {
      class: "w-full",
      children: createVNode("div", {
        style: "position:relative;padding-top:56.25%;",
        children: createVNode("iframe", {
          src: "https://iframe.mediadelivery.net/embed/201842/4a644d08-d8f1-4960-829d-0c4bc1fc8023?autoplay=false&loop=false&muted=false&preload=true&responsive=true",
          loading: "lazy",
          style: "border:0;position:absolute;top:0;height:100%;width:100%;",
          allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;",
          allowfullscreen: "true"
        })
      })
    }), createVNode($$Prose, {})]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/acciones/briana-weapons";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/briana-weapons.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment: Fragment$1, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/briana-weapons.mdx";

const brianaWeapons = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, $$Layout as a, $$Prose as b, allStations as c, currentStationIndex as d, imageConfig as e, brianaWeapons as f, getImage as g, isAnimating as i, solapaAbierta as s };
