/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro__iBP4jqW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_Gi7bHsHQ.mjs';

const $$Astro = createAstro();
const $$Taktel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Taktel;
  const tipo = "accion";
  const autor = "Taktel";
  const titulo = "Reacci\xF3n en cadena";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${titulo}</h1> <p>Escrito por: ${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/taktel.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/taktel.astro";
const $$url = "/acciones/taktel";

export { $$Taktel as default, $$file as file, $$url as url };
