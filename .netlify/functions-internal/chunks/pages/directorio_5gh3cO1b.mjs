/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_fHSIkPwp.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { S as StationLinks, a as $$Layout } from './briana-weapons_2tLhGgKh.mjs';

const $$Astro = createAstro();
const $$Directorio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Directorio;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Directorio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StationLinks", StationLinks, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/StationLinks", "client:component-export": "default" })} ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/directorio.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/directorio.astro";
const $$url = "/directorio";

export { $$Directorio as default, $$file as file, $$url as url };
