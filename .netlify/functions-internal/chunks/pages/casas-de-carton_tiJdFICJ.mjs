/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_H8YBTxzw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_dWe7PYNG.mjs';

const $$Astro = createAstro();
const $$CasasDeCarton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CasasDeCarton;
  const tipo = "texto";
  const autor = "Luis Duno-Gottberg";
  const titulo = "Casas de cart\xF3n: cantos de contienda para una modernidad desigual";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${titulo}</h1> <p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/textos/casas-de-carton.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/casas-de-carton.astro";
const $$url = "/textos/casas-de-carton";

export { $$CasasDeCarton as default, $$file as file, $$url as url };
