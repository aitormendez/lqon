/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_H8YBTxzw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons__1IW-fHx.mjs';

const $$Astro = createAstro();
const $$LaComuidad = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LaComuidad;
  const tipo = "texto";
  const autor = "Luis Navarro";
  const titulo = "La Comunidad";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${titulo}</h1> <p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/textos/la-comuidad.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/la-comuidad.astro";
const $$url = "/textos/la-comuidad";

export { $$LaComuidad as default, $$file as file, $$url as url };
