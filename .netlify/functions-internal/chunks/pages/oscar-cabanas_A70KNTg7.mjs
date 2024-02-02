/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro__iBP4jqW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_iXigRLiv.mjs';

const $$Astro = createAstro();
const $$OscarCabanas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OscarCabanas;
  const tipo = "accion";
  const autor = "Oscar cabanas";
  const titulo = "Mandam\xE1s";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Escrito por: ${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/oscar-cabanas.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/oscar-cabanas.astro";
const $$url = "/acciones/oscar-cabanas";

export { $$OscarCabanas as default, $$file as file, $$url as url };
