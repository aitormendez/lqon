/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_H8YBTxzw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_dWe7PYNG.mjs';

const $$Astro = createAstro();
const $$GrupoChasky = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GrupoChasky;
  const tipo = "accion";
  const autor = "Grupo Chasky";
  const titulo = "Movimiento ind\xEDgena";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/grupo-chasky.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/grupo-chasky.astro";
const $$url = "/acciones/grupo-chasky";

export { $$GrupoChasky as default, $$file as file, $$url as url };
