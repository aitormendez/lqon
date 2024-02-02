/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_fHSIkPwp.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { a as $$Layout } from './briana-weapons_ULelvfPs.mjs';

const $$Astro = createAstro();
const $$QueNoEsLaPsicogeografia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QueNoEsLaPsicogeografia;
  const tipo = "texto";
  const autor = "Luis Navarro";
  const titulo = "Qu\xE9 no es la psicogeograf\xEDa";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${titulo}</h1> <p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/textos/que-no-es-la-psicogeografia.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/que-no-es-la-psicogeografia.astro";
const $$url = "/textos/que-no-es-la-psicogeografia";

export { $$QueNoEsLaPsicogeografia as default, $$file as file, $$url as url };
