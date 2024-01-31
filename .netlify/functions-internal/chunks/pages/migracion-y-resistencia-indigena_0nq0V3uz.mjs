/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_H8YBTxzw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './briana-weapons_dWe7PYNG.mjs';

const $$Astro = createAstro();
const $$MigracionYResistenciaIndigena = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MigracionYResistenciaIndigena;
  const tipo = "texto";
  const autor = "Luis Duno_Gottberg";
  const titulo = "Y nos vamos todos juntos: Migraci\xF3n y resistencia ind\xEDgena en el contexto de la hegemon\xEDa neoliberal";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": titulo, "tipo": tipo, "autor": autor }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${titulo}</h1> <p>${autor}</p> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/textos/migracion-y-resistencia-indigena.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/migracion-y-resistencia-indigena.astro";
const $$url = "/textos/migracion-y-resistencia-indigena";

export { $$MigracionYResistenciaIndigena as default, $$file as file, $$url as url };
