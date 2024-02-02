/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro__iBP4jqW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_Gi7bHsHQ.mjs';

const $$Astro = createAstro();
const $$Vicius = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Vicius;
  const tipo = "accion";
  const autor = "Vicius";
  const titulo = "Vacaciones en Espa\xF1a";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vicius.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vicius.astro";
const $$url = "/acciones/vicius";

export { $$Vicius as default, $$file as file, $$url as url };
