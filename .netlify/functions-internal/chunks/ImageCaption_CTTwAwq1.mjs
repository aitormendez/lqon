import { a as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, r as renderTemplate } from './astro/server_Zajxhskx.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getImage } from './_astro_assets_CNs7P3E_.mjs';

const $$Astro = createAstro();
const $$ImageCaption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageCaption;
  const {
    mobileImgUrl,
    desktopImgUrl,
    alt,
    caption,
    clase,
    hasCaption = true,
    desktopWidth = 800
  } = Astro2.props;
  const mobileImg = await getImage({
    src: mobileImgUrl,
    format: "webp",
    width: 400
  });
  const desktopImg = await getImage({
    src: desktopImgUrl,
    format: "webp",
    width: desktopWidth
  });
  return renderTemplate`${maybeRenderHead()}<figure${addAttribute(clase, "class")}> <picture> <source media="(max-width: 799px)"${addAttribute(mobileImg.src, "srcset")}> <source${addAttribute(`(min-width: ${desktopWidth}px)`, "media")}${addAttribute(desktopImg.src, "srcset")}> <img${addAttribute(desktopImg.src, "src")}${addAttribute(alt, "alt")}> </picture> ${hasCaption && renderTemplate`<figcaption>${unescapeHTML(caption)}</figcaption>`} </figure>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/ImageCaption.astro", void 0);

export { $$ImageCaption as $ };
