/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_H8YBTxzw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons__1IW-fHx.mjs';

const $$Astro = createAstro();
const $$ElChirly = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ElChirly;
  const tipo = "accion";
  const autor = "El Chirly";
  const titulo = "Est\xE1n cayendo bombas en Madrid";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/el-chirly.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/el-chirly.astro";
const $$url = "/acciones/el-chirly";

export { $$ElChirly as default, $$file as file, $$url as url };
