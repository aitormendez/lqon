/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro__iBP4jqW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_iXigRLiv.mjs';

const $$Astro = createAstro();
const $$LaMuerteDeclaraLaQuerraALosGendarmes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LaMuerteDeclaraLaQuerraALosGendarmes;
  const tipo = "texto";
  const autor = "Georges Brassens";
  const titulo = "La muerte declara la guerra a los gendarmes";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${titulo}</h1> <p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes.astro";
const $$url = "/textos/la-muerte-declara-la-querra-a-los-gendarmes";

export { $$LaMuerteDeclaraLaQuerraALosGendarmes as default, $$file as file, $$url as url };
