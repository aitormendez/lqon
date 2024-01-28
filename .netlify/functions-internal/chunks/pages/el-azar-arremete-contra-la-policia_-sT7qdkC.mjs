/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_HIGthTr3.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_gFYjtlHr.mjs';

const $$Astro = createAstro();
const $$ElAzarArremeteContraLaPolicia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ElAzarArremeteContraLaPolicia;
  const tipo = "texto";
  const autor = "Georges Brassens";
  const titulo = "El azar arremete contra la polic\xEDa";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/textos/el-azar-arremete-contra-la-policia.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/el-azar-arremete-contra-la-policia.astro";
const $$url = "/textos/el-azar-arremete-contra-la-policia";

export { $$ElAzarArremeteContraLaPolicia as default, $$file as file, $$url as url };
