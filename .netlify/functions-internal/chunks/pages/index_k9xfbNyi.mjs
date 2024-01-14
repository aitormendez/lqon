/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_vBkIAsTA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Canvas } from '@react-three/fiber';
import { useGLTF, CameraControls } from '@react-three/drei';
import { useRef } from 'react';
import { ACESFilmicToneMapping } from 'three';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/aitor/Documents/Sites/lqon/src/layouts/Layout.astro", void 0);

function Model(props) {
  const { nodes, materials } = useGLTF("../models/anden-transformed.glb");
  return /* @__PURE__ */ jsxs("group", { ...props, dispose: null, children: [
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
        geometry: nodes["soporte-señal2"].geometry,
        material: materials.negro,
        position: [-119.313, 22.358, -6.77],
        rotation: [0.461, 0, 0]
      }
    ),
    /* @__PURE__ */ jsx(
      "mesh",
      {
        geometry: nodes.pasillo.geometry,
        material: materials.ConcretePoured001_2K
      }
    ),
    /* @__PURE__ */ jsx(
      "instancedMesh",
      {
        args: [nodes.Plane008.geometry, nodes.Plane008.material, 6],
        instanceMatrix: nodes.Plane008.instanceMatrix
      }
    )
  ] });
}
useGLTF.preload("../models/anden-transformed.glb");

const Scene = () => {
  useRef();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("directionalLight", { castShadow: true, position: [-1, 2, -2], intensity: 10 }),
    /* @__PURE__ */ jsx(Model, { scale: 0.5 }),
    /* @__PURE__ */ jsxs("mesh", { receiveShadow: true, "rotation-x": -Math.PI * 0.5, scale: 100, children: [
      /* @__PURE__ */ jsx("planeGeometry", {}),
      /* @__PURE__ */ jsx("meshStandardMaterial", { color: "white" })
    ] }),
    /* @__PURE__ */ jsx(CameraControls, { makeDefault: true })
  ] });
};
const Fiber = () => {
  return /* @__PURE__ */ jsx(
    Canvas,
    {
      gl: {
        antialias: true,
        toneMapping: ACESFilmicToneMapping
      },
      shadows: true,
      camera: { position: [0, 0, 5], fov: 45 },
      style: { height: "20vh" },
      children: /* @__PURE__ */ jsx(Scene, {})
    }
  );
};

function Greeting() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "asdads" }) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(["", " <!-- <script>\n	const myTimeout = setTimeout(myGreeting, 5000);\n	const escena = document.getElementById('escena');\n  \n	function myGreeting() {\n		escena.style.height = '50vh';\n	}\n<\/script>\n   -->"])), renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div id="escena"> ${renderComponent($$result2, "Greeting", Greeting, {})} ${renderComponent($$result2, "Fiber", Fiber, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/Fiber.jsx", "client:component-export": "default" })} </div> </main> ` }));
}, "/Users/aitor/Documents/Sites/lqon/src/pages/index.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
