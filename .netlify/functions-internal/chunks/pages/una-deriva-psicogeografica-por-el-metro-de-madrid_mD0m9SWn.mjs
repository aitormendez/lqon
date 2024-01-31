/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_H8YBTxzw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_dWe7PYNG.mjs';

const $$Astro = createAstro();
const $$UnaDerivaPsicogeograficaPorElMetroDeMadrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UnaDerivaPsicogeograficaPorElMetroDeMadrid;
  const tipo = "texto";
  const autor = "Luis Navarro";
  const titulo = "Una deriva psicogeogr\xE1fica por el metro de Madrid";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${titulo}</h1> <p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.astro";
const $$url = "/textos/una-deriva-psicogeografica-por-el-metro-de-madrid";

export { $$UnaDerivaPsicogeograficaPorElMetroDeMadrid as default, $$file as file, $$url as url };
