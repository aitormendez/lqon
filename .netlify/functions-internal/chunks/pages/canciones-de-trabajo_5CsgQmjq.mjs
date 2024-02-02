/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro__iBP4jqW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_Gi7bHsHQ.mjs';

const $$Astro = createAstro();
const $$CancionesDeTrabajo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CancionesDeTrabajo;
  const tipo = "texto";
  const autor = "Daniel Villegas";
  const titulo = "Recuperaci\xF3n & Reexplotaci\xF3n. Acerca de las canciones de trabajo";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${titulo}</h1> <p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/textos/canciones-de-trabajo.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/canciones-de-trabajo.astro";
const $$url = "/textos/canciones-de-trabajo";

export { $$CancionesDeTrabajo as default, $$file as file, $$url as url };
