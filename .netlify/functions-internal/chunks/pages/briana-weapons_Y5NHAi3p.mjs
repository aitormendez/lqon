import '@astrojs/internal-helpers/path';
/* empty css                                   */
import 'html-escaper';
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as createTransitionScope, l as renderSlot, _ as __astro_tag_component__, F as Fragment$1, n as createVNode } from '../astro_fHSIkPwp.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_UEnka9eS.mjs';
import 'clsx';
import 'kleur/colors';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useThree, useFrame, Canvas } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useGLTF, Text } from '@react-three/drei';

const $$Astro$5 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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

const $$Astro$4 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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

const currentStationIndex = atom(0);
const isAnimating = atom(false);

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
		nombre: "Lo quieras o no",
		materialCartel: "",
		materialPlano: "",
		tipo: "home",
		uri: ""
	},
	{
		nombre: "Lo quieras o no",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "presentacion"
	},
	{
		nombre: "Deriva psicogeográfica 1",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "una-deriva-psicogeografica-por-el-metro-de-madrid"
	},
	{
		nombre: "Qué no es la psicogeografía",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "que-no-es-la-psicogeografia"
	},
	{
		nombre: "Oscar Cabanas",
		materialCartel: "cartel-oscar-cabanas",
		materialPlano: "plano-oscar-cabanas",
		tipo: "accion",
		uri: "oscar-cabanas"
	},
	{
		nombre: "Deriva psicogeográfica 2",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "no-lugar"
	},
	{
		nombre: "Vorja Encikutao",
		materialCartel: "cartel-vorja-encikutao",
		materialPlano: "plano-vorja-encikutao",
		tipo: "accion",
		uri: "vorja-encikutao"
	},
	{
		nombre: "La muerte…",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "la-muerte-declara-la-querra-a-los-gendarmes"
	},
	{
		nombre: "Deriva psicogeográfica 3",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "la-comunidad"
	},
	{
		nombre: "Taktel",
		materialCartel: "cartel-taktel",
		materialPlano: "plano-taxtel",
		tipo: "accion",
		uri: "taktel"
	},
	{
		nombre: "Canciones de trabajo",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "canciones-de-trabajo"
	},
	{
		nombre: "Juan Carlos Gorreta",
		materialCartel: "cartel-juan-carlos-gorreta",
		materialPlano: "plano-juan-carlos-gorreta",
		tipo: "accion",
		uri: "juan-carlos-gorreta"
	},
	{
		nombre: "Deriva psicogeográfica 4",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "juglaria"
	},
	{
		nombre: "Vicius",
		materialCartel: "cartel-vicius",
		materialPlano: "plano-vicius",
		tipo: "accion",
		uri: "vicius"
	},
	{
		nombre: "Democracia",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: ""
	},
	{
		nombre: "Grupo Chasky",
		materialCartel: "cartel-grupo-chasky",
		materialPlano: "plano-grupo-chasky",
		tipo: "accion",
		uri: "grupo-chasky"
	},
	{
		nombre: "Resistencias migrantes",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "migracion-y-resistencia-indigena"
	},
	{
		nombre: "Nono Murcia",
		materialCartel: "cartel-nono-murcia",
		materialPlano: "plano-nono-murcia",
		tipo: "accion",
		uri: "nono-murcia"
	},
	{
		nombre: "Folclore",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "folclore"
	},
	{
		nombre: "El Chirly",
		materialCartel: "cartel-el-chirly",
		materialPlano: "plano-el-chirly",
		tipo: "accion",
		uri: "el-chirly"
	},
	{
		nombre: "Deriva psicogeográfica 5",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "resonancias"
	},
	{
		nombre: "Briana Weapons",
		materialCartel: "",
		materialPlano: "",
		tipo: "accion",
		uri: "briana-weapons"
	},
	{
		nombre: "Lucia Montenegro",
		materialCartel: "",
		materialPlano: "",
		tipo: "accion",
		uri: "lucia-montenegro"
	},
	{
		nombre: "Casas de cartón",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "casas-de-carton"
	},
	{
		nombre: "Post logo",
		materialCartel: "",
		materialPlano: "",
		tipo: "texto",
		uri: "post-logo"
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
          id: `station-${Date.now()}`,
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
      id: `station-${Date.now()}`,
      nombre: allStations[currentIndex].nombre,
      materialCartel: allStations[currentIndex].materialCartel,
      materialPlano: allStations[currentIndex].materialPlano,
      position: [newPositionX, 0, 0]
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

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/aitor/Documents/Sites/lqon/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$CommonHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CommonHead;
  const { titulo, nombre, tipo } = Astro2.props;
  return renderTemplate`<head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${titulo}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/CommonHead.astro", void 0);

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
  };
  const textoStations = allStations.filter(
    (station) => station.tipo === "texto"
  );
  const accionStations = allStations.filter(
    (station) => station.tipo === "accion"
  );
  return /* @__PURE__ */ jsxs("div", { className: "m-4", children: [
    /* @__PURE__ */ jsx("div", { className: "inline-block", children: textoStations.map((station, index) => /* @__PURE__ */ jsx(
      "a",
      {
        className: "block m-2",
        href: `/textos/${station.uri}`,
        onClick: (e) => goToStation(station.uri, e),
        children: station.nombre
      },
      `${station.nombre}-${index}`
    )) }),
    /* @__PURE__ */ jsx("div", { className: "inline-block", children: accionStations.map((station, index) => /* @__PURE__ */ jsx(
      "a",
      {
        className: "block m-2",
        href: `/acciones/${station.uri}`,
        onClick: (e) => goToStation(station.uri, e),
        children: station.nombre
      },
      `${station.nombre}-${index}`
    )) })
  ] });
};

const Menu = () => {
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
    if (animating) {
      event.preventDefault();
    } else {
      const nextIndex = (currentStationIndex.get() + 1) % allStations.length;
      currentStationIndex.set(nextIndex);
      isAnimating.set(true);
    }
  };
  const navClasses = animating ? "pointer-events-none text-slate-400" : "";
  return /* @__PURE__ */ jsxs("nav", { id: "menu", className: navClasses, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "inline-block p-4 rounded bg-black m-4",
        href: nextStationHref,
        onClick: goToNextStation,
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "32",
            height: "26",
            viewBox: "0 0 32 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M22.1876 10.9494L11.8997 0.857187L19.1492 0.857141L32 13.4636L19.2206 26L11.9715 26L22.1877 15.978L-8.7616e-07 15.9779L6.31363e-06 10.9494L22.1876 10.9494Z",
                fill: "#E60000"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(StationLinks, {})
  ] });
};

const logotipo = "/_astro/torno.6YsZh9no.mp4";

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="flex gap-5"> <div class="logo w-[10vw]"> <video id="videoLogotipo" muted playsinline> <source${addAttribute(logotipo, "src")} type="video/mp4">
Tu navegador no soporta videos.
</video> </div> <button id="reiniciarVideoBtn">Reiniciar Video</button> </header> `;
}, "/Users/aitor/Documents/Sites/lqon/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titulo, nombre, tipo } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "CommonHead", $$CommonHead, { "tipo": tipo, "nombre": nombre })}${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead()}<body class="text-white"> <header${addAttribute(createTransitionScope($$result, "yxpohs6f"), "data-astro-transition-persist")}> ${renderComponent($$result, "Menu", Menu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/Menu.jsx", "client:component-export": "default" })} ${renderComponent($$result, "Fiber", Fiber, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/Fiber.jsx", "client:component-export": "default" })} </header> <main class="font-serif"> ${renderSlot($$result, $$slots["default"])} </main>   </body> </html>`;
}, "/Users/aitor/Documents/Sites/lqon/src/layouts/Layout.astro", "self");

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
    title: frontmatter.titulo,
    tipo: frontmatter.tipo,
    autor: frontmatter.autor,
    children: createVNode("p", {
      children: frontmatter.autor
    })
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

export { $$Image as $, $$Layout as a, brianaWeapons as b, imageConfig as i };
