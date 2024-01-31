/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_H8YBTxzw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_dWe7PYNG.mjs';

const $$Astro = createAstro();
const $$JuanCarlosGorreta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$JuanCarlosGorreta;
  const tipo = "accion";
  const autor = "Juan Carlos Gorreta";
  const titulo = "La vida de los exclavos en el siglo XXI";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Escrito por: ${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/juan-carlos-gorreta.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/juan-carlos-gorreta.astro";
const $$url = "/acciones/juan-carlos-gorreta";

export { $$JuanCarlosGorreta as default, $$file as file, $$url as url };
