/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_vBkIAsTA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useThree, useFrame, Canvas } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { useGLTF, Text } from '@react-three/drei';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/aitor/Documents/Sites/lqon/src/layouts/Layout.astro", void 0);

function Model({
  nombreEstacion,
  materialPlano,
  materialCartel,
  ...props
}) {
  const { nodes, materials } = useGLTF("../models/anden.glb");
  console.log(materials);
  console.log(materialPlano);
  var nombres = [];
  for (var i = 0; i < 7; i++) {
    nombres.push(
      /* @__PURE__ */ jsx(
        Text,
        {
          position: [i * 60 - 190, 22.2, -6.4],
          "rotation-x": 0.4,
          font: "../fonts/helveue-bold-webfont.woff",
          fontSize: 1.5,
          color: "#AC0000",
          children: nombreEstacion
        },
        `nombre-${i}`
      )
    );
  }
  return /* @__PURE__ */ jsxs("group", { ...props, dispose: null, children: [
    nombres,
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
        material: materials["baked.pared"],
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
    /* @__PURE__ */ jsx("mesh", { geometry: nodes.cartelmarco.geometry, material: materials.negro }),
    /* @__PURE__ */ jsx(
      "mesh",
      {
        geometry: nodes.cartelcartel001.geometry,
        material: materials[{ materialCartel }],
        position: [0, 0, 0.08]
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
        material: materials[{ materialPlano }],
        position: [0, 0, -0.572]
      }
    )
  ] });
}
useGLTF.preload("../models/anden.glb");

const Metro = ({
  isAnimating,
  setIsAnimating,
  setCameraPositionStart,
  cameraPositionStart
}) => {
  const { camera } = useThree();
  const isMoving = useRef(false);
  const startTimeRef = useRef(null);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);
  const [lastPositionX, setLastPositionX] = useState(0);
  const [cameraTargetPositionEnd, setCameraTargetPositionEnd] = useState(-540);
  const allStations = [
    {
      id: 1,
      nombre: "Oscar Cabanas",
      materialCartel: "cartel-oscar-cabanas",
      materialPlano: "plano-oscar-cabanas"
    },
    {
      id: 2,
      nombre: "Vorja Encikutao",
      materialCartel: "cartel-vorja-encikutao",
      materialPlano: "plano-vorja-encikutao"
    },
    {
      id: 3,
      nombre: "Taktel",
      materialCartel: "cartel-taktel",
      materialPlano: "plano-taxtel"
    },
    {
      id: 4,
      nombre: "Juan Carlos Gorreta",
      materialCartel: "cartel-juan-carlos-gorreta",
      materialPlano: "plano-juan-carlos-gorreta"
    },
    {
      id: 5,
      nombre: "Vicius",
      materialCartel: "cartel-vicius",
      materialPlano: "plano-vicius"
    },
    {
      id: 6,
      nombre: "Grupo Chasky",
      materialCartel: "cartel-grupo-chasky",
      materialPlano: "plano-grupo-chasky"
    },
    {
      id: 7,
      nombre: "Nono Murcia",
      materialCartel: "cartel-nono-murcia",
      materialPlano: "plano-nono-murcia"
    },
    {
      id: 8,
      nombre: "El Chirly",
      materialCartel: "cartel-el-chirly",
      materialPlano: "plano-el-chirly"
    },
    { id: 9, nombre: "Work Song", materialCartel: "", materialPlano: "" },
    {
      id: 10,
      nombre: "Lucia Montenegro",
      materialCartel: "",
      materialPlano: ""
    }
  ];
  const [stations, setStations] = useState([
    { id: 1, nombre: "Oscar Cabanas" }
  ]);
  const addStation = () => {
    const newStationIndex = (currentStationIndex + 1) % allStations.length;
    setCurrentStationIndex(newStationIndex);
    const newPositionX = lastPositionX - 500;
    setLastPositionX(newPositionX);
    const newStation = {
      id: `station-${Date.now()}`,
      nombre: allStations[newStationIndex].nombre,
      position: [newPositionX, 0, 0]
    };
    setStations((prevStations) => [...prevStations, newStation]);
  };
  const removeFirstStation = () => {
    setStations(stations.slice(1));
  };
  useEffect(() => {
    if (isAnimating && !isMoving.current) {
      addStation();
      startTimeRef.current = null;
      isMoving.current = true;
    }
  }, [isAnimating]);
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
        setIsAnimating(false);
        removeFirstStation();
        setCameraPositionStart(cameraPositionStart - 500);
        setCameraTargetPositionEnd(cameraTargetPositionEnd - 500);
      }
    }
  });
  return /* @__PURE__ */ jsx(Fragment, { children: stations.map((station) => /* @__PURE__ */ jsx(
    Model,
    {
      nombreEstacion: station.nombre,
      materialCartel: station.materialCartel,
      materialPlano: station.materialPlano,
      position: station.position
    },
    station.id
  )) });
};

const Fiber = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [cameraPositionStart, setCameraPositionStart] = useState(-40);
  const handleAnimationStart = () => {
    setIsAnimating(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
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
              isAnimating,
              setIsAnimating,
              cameraPositionStart,
              setCameraPositionStart
            }
          ),
          /* @__PURE__ */ jsx("ambientLight", { intensity: 2 })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "text-white p-4 rounded bg-black m-4",
        onClick: handleAnimationStart,
        children: "Start Animation"
      }
    )
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(["", " <!-- <script>\n	const myTimeout = setTimeout(myGreeting, 5000);\n	const escena = document.getElementById('escena');\n  \n	function myGreeting() {\n		escena.style.height = '50vh';\n	}\n<\/script>\n   -->"])), renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div id="escena"> ${renderComponent($$result2, "Fiber", Fiber, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/Fiber.jsx", "client:component-export": "default" })} </div> </main> ` }));
}, "/Users/aitor/Documents/Sites/lqon/src/pages/index.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
