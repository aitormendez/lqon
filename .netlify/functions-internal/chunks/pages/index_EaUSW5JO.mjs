/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_fHSIkPwp.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { a as $$Layout } from './briana-weapons_2tLhGgKh.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main>Home</main> ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/index.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
