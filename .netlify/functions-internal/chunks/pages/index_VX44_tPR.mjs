/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_vBkIAsTA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { ACESFilmicToneMapping } from 'three';
import { useGLTF, Text } from '@react-three/drei';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/aitor/Documents/Sites/lqon/src/layouts/Layout.astro", void 0);

function Model(props) {
  const { nodes, materials } = useGLTF("../models/anden.glb");
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
          children: "Oscar Cabanas"
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
        material: materials["Cartel.002"],
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
        material: materials["plano.002"],
        position: [0, 0, -0.572]
      }
    )
  ] });
}
useGLTF.preload("../models/anden.glb");

const Scene = ({ cameraRef }) => {
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const duration = 10;
    const start = 0;
    const end = -30;
    const z = end * (1 - Math.pow(1 - Math.min(t / duration, 1), 2)) + start;
    if (cameraRef.current) {
      cameraRef.current.position.z = z;
    }
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("ambientLight", { intensity: 2 }),
    /* @__PURE__ */ jsx(Model, { scale: 0.5, position: [-50, 0, 0] })
  ] });
};
const Fiber = () => {
  const cameraRef = useRef();
  return /* @__PURE__ */ jsxs(
    Canvas,
    {
      gl: {
        antialias: true,
        toneMapping: ACESFilmicToneMapping
      },
      shadows: true,
      camera: { position: [-70, 9.5, 30], fov: 20, rotation: [0, 0, 0] },
      style: { height: "30vw" },
      children: [
        /* @__PURE__ */ jsx("perspectiveCamera", { ref: cameraRef, position: [-70, 9.5, 30], fov: 20 }),
        /* @__PURE__ */ jsx(Scene, {})
      ]
    }
  );
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
