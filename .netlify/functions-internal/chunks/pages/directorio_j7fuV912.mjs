/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_fHSIkPwp.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { c as allStations, i as isAnimating, d as currentStationIndex, s as solapaAbierta, a as $$Layout } from './briana-weapons_6vpbGIWf.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';

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

const $$Astro = createAstro();
const $$Directorio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Directorio;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Directorio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StationLinks", StationLinks, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/StationLinks", "client:component-export": "default" })} ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/directorio.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/directorio.astro";
const $$url = "/directorio";

export { $$Directorio as default, $$file as file, $$url as url };
