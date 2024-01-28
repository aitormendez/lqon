/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderHead, i as renderComponent, j as renderSlot, m as maybeRenderHead } from '../astro_HIGthTr3.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useThree, useFrame, Canvas } from '@react-three/fiber';
import { createContext, useState, useContext, useRef, useEffect } from 'react';
import { useGLTF, Text } from '@react-three/drei';

const AnimationContext = createContext({
  currentStationIndex: 0,
  isAnimating: false,
  handleAnimationStart: () => {
  },
  setIsAnimating: () => {
  }
});
const useAnimationContext = () => useContext(AnimationContext);
const AnimationProvider = ({ children }) => {
  const [currentStationIndex, setCurrentStationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleAnimationStart = (newStationIndex) => {
    console.log("newStationIndex", newStationIndex);
    setCurrentStationIndex(newStationIndex);
    setIsAnimating(true);
  };
  return /* @__PURE__ */ jsx(
    AnimationContext.Provider,
    {
      value: { currentStationIndex, isAnimating, handleAnimationStart },
      children
    }
  );
};

function Model({
  nombreEstacion,
  materialPlano,
  materialCartel,
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
        material: materials[materialCartel],
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
        material: materials[materialPlano],
        position: [0, 0, -0.572]
      }
    )
  ] });
}
useGLTF.preload("../models/anden.glb");

const allStations = [
	{
		nombre: "Democracia",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto"
	},
	{
		nombre: "Oscar Cabanas",
		materialCartel: "cartel-oscar-cabanas",
		materialPlano: "plano-oscar-cabanas",
		tipo: "accion"
	},
	{
		nombre: "Vorja Encikutao",
		materialCartel: "cartel-vorja-encikutao",
		materialPlano: "plano-vorja-encikutao",
		tipo: "accion"
	},
	{
		nombre: "Taktel",
		materialCartel: "cartel-taktel",
		materialPlano: "plano-taxtel",
		tipo: "accion"
	},
	{
		nombre: "Juan Carlos Gorreta",
		materialCartel: "cartel-juan-carlos-gorreta",
		materialPlano: "plano-juan-carlos-gorreta",
		tipo: "accion"
	},
	{
		nombre: "Vicius",
		materialCartel: "cartel-vicius",
		materialPlano: "plano-vicius",
		tipo: "accion"
	},
	{
		nombre: "Grupo Chasky",
		materialCartel: "cartel-grupo-chasky",
		materialPlano: "plano-grupo-chasky",
		tipo: "accion"
	},
	{
		id: 7,
		nombre: "Nono Murcia",
		materialCartel: "cartel-nono-murcia",
		materialPlano: "plano-nono-murcia",
		tipo: "accion"
	},
	{
		nombre: "El Chirly",
		materialCartel: "cartel-el-chirly",
		materialPlano: "plano-el-chirly",
		tipo: "accion"
	},
	{
		nombre: "Work Song",
		materialCartel: "",
		materialPlano: "",
		tipo: "accion"
	},
	{
		nombre: "Lucia Montenegro",
		materialCartel: "",
		materialPlano: "",
		tipo: "accion"
	}
];

const Metro = () => {
  const { camera } = useThree();
  const isMoving = useRef(false);
  const startTimeRef = useRef(null);
  const {
    currentStationIndex,
    setCurrentStationIndex,
    isAnimating,
    setIsAnimating
  } = useAnimationContext();
  const [lastPositionX, setLastPositionX] = useState(0);
  const [cameraTargetPositionEnd, setCameraTargetPositionEnd] = useState(-540);
  const [stations, setStations] = useState([
    {
      id: 1,
      nombre: "Democracia",
      materialCartel: "",
      materialPlano: "",
      tipo: "texto"
    }
  ]);
  const addStation = () => {
    const newPositionX = lastPositionX - 500;
    setLastPositionX(newPositionX);
    const newStation = {
      id: `station-${Date.now()}`,
      nombre: allStations[currentStationIndex].nombre,
      materialCartel: allStations[currentStationIndex].materialCartel,
      materialPlano: allStations[currentStationIndex].materialPlano,
      position: [newPositionX, 0, 0]
    };
    setStations((prevStations) => [...prevStations, newStation]);
  };
  const removeFirstStation = () => {
    setStations(stations.slice(1));
  };
  useEffect(() => {
    console.log("isAnimating", isAnimating);
    if (isAnimating && !isMoving.current) {
      addStation();
      startTimeRef.current = null;
      isMoving.current = true;
    }
  }, [isAnimating, currentStationIndex]);
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
  const {
    isAnimating,
    setIsAnimating,
    currentStationIndex,
    handleAnimationStart
  } = useAnimationContext();
  const [cameraPositionStart, setCameraPositionStart] = useState(-40);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
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
  ) });
};

const TestContext = createContext(0);
const TestProvider = ({ children }) => {
  const [testValue, setTestValue] = useState(0);
  const changeValue = () => {
    setTestValue(testValue + 1);
  };
  return /* @__PURE__ */ jsx(TestContext.Provider, { value: { testValue, changeValue }, children });
};

const Menu = () => {
  const { currentStationIndex, handleAnimationStart } = useAnimationContext();
  const context = useAnimationContext();
  console.log("context", context);
  const goToNextStation = () => {
    const nextStationIndex = (currentStationIndex + 1) % allStations.length;
    handleAnimationStart(nextStationIndex);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "p-6 bg-black rounded m-4 text-white",
      onClick: goToNextStation,
      children: "Siguiente Estación"
    }
  );
};

function Hello() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Hello" }) });
}

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titulo, nombre, tipo } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Lo quieras o no. ${titulo}</title>${renderHead()}</head> <body> ${renderComponent($$result, "AnimationProvider", AnimationProvider, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TestProvider", TestProvider, {}, { "default": ($$result3) => renderTemplate`  ${renderComponent($$result3, "Hello", Hello, {})} <header> ${renderComponent($$result3, "Menu", Menu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/Menu.jsx", "client:component-export": "default" })} ${renderComponent($$result3, "Fiber", Fiber, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/Fiber.jsx", "client:component-export": "default" })} <h1>${titulo}</h1> </header> <main> ${renderSlot($$result3, $$slots["default"])} </main> ` })} ` })} </body></html>`;
}, "/Users/aitor/Documents/Sites/lqon/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$BrianaWeapons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BrianaWeapons;
  const tipo = "accion";
  const autor = "Briana Weapons";
  const titulo = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/briana-weapons.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/briana-weapons.astro";
const $$url = "/acciones/briana-weapons";

const brianaWeapons = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BrianaWeapons,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, brianaWeapons as b };
