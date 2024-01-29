/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_H8YBTxzw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons__1IW-fHx.mjs';

const $$Astro = createAstro();
const $$VorjaEncikutao = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VorjaEncikutao;
  const tipo = "accion";
  const autor = "Vorja Encikutao";
  const titulo = "Las mala reputaci\xF3n";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vorja-encikutao.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vorja-encikutao.astro";
const $$url = "/acciones/vorja-encikutao";

export { $$VorjaEncikutao as default, $$file as file, $$url as url };
