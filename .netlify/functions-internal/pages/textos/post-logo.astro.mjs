/* empty css                                             */
import { _ as __astro_tag_component__, c as createVNode, F as Fragment } from '../../chunks/astro/server_Zajxhskx.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_CNs7P3E_.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DazPIoD3.mjs';
import { $ as $$Prose } from '../../chunks/Prose_Cyz7FRj5.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const frontmatter = {
  "tipo": "texto",
  "autor": "",
  "titulo": "Deriva psicogeogr\xE1fica 9"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode($$Layout, {
    titulo: frontmatter.titulo,
    tipo: frontmatter.tipo,
    autor: frontmatter.autor,
    children: createVNode($$Prose, {
      children: [createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: frontmatter.autor
        })
      }), createVNode("div", {
        class: "text-red-500",
        children: [createVNode(_components.p, {
          children: "Nos bajamos aqu\xED. Nada indica que esto sea alg\xFAn tipo de destino, pero nos ha entrado prisa por salir de una vez. Es lo malo de no saber ad\xF3nde vas antes de empezar a dirigirte a ello. El tren contin\xFAa su recorrido, y nuestro viaje tambi\xE9n, sin que hayamos llegado a ninguna conclusi\xF3n, afortunadamente."
        }), createVNode(_components.p, {
          children: "Hace tiempo, en vez de viajar por viajar hac\xEDamos fanzines. Los fanzines ten\xEDan su propia escena y su relevancia. En aquellos a\xF1os se abri\xF3 un animado debate en torno a la naturaleza y funci\xF3n social del fanzine.1 A la hora de definir definitivamente qu\xE9 era un fanzine, no encontr\xE9 mejor respuesta que la que me dieron los Buitre No Come Alpiste, pioneros de la fanzinolog\xEDa: \u201CUn fanzine es hacer un fanzine\u201D."
        }), createVNode(_components.p, {
          children: "Si hubiese en todo caso que alegar al menos un descubrimiento que justifique nuestro gasto improductivo, ser\xEDa el que encontr\xE1bamos al final de tantos libros de viajes: el sentido del viaje es el viaje, mismo. No queremos decir que lo hayamos hecho por hacerlo. Alguna iluminaci\xF3n, alguna consecuencia, alguna ruta se habr\xE1 abierto por all\xE1, y por all\xE1. Tienes que atravesar la l\xEDnea."
        })]
      })]
    })
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/textos/post-logo";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/post-logo.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/post-logo.mdx";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
