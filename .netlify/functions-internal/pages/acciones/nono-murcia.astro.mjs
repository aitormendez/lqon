/* empty css                                             */
import { _ as __astro_tag_component__, c as createVNode, F as Fragment } from '../../chunks/astro/server_Zajxhskx.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_CNs7P3E_.mjs';
import { $ as $$Layout } from '../../chunks/Layout_ClbmJAAN.mjs';
import { $ as $$Prose } from '../../chunks/Prose_Cyz7FRj5.mjs';
import { $ as $$ImageCaption } from '../../chunks/ImageCaption_CTTwAwq1.mjs';
import { i as imageNonoCNT } from '../../chunks/nono-cnt-ret_BzpAmIpq.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const imageNono2 = new Proxy({"src":"/_astro/nono-2.CzcD3Ojf.jpg","width":895,"height":635,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/nono-2.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "tipo": "accion",
  "autor": "Nono Murcia",
  "titulo": "Fandangos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "fandangos",
    "text": "Fandangos"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    br: "br",
    em: "em",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode($$Layout, {
    titulo: frontmatter.titulo,
    tipo: frontmatter.tipo,
    autor: frontmatter.autor,
    children: [createVNode($$Prose, {
      children: createVNode("h1", {
        children: frontmatter.autor
      })
    }), createVNode("div", {
      class: "w-full",
      children: createVNode("div", {
        style: "position:relative;padding-top:56.25%;",
        children: createVNode("iframe", {
          src: "https://iframe.mediadelivery.net/embed/201842/373a1c84-54a5-4e46-92ec-46ffdfd89674?autoplay=false&loop=false&muted=false&preload=true&responsive=true",
          loading: "lazy",
          style: "border:0;position:absolute;top:0;height:100%;width:100%;",
          allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;",
          allowfullscreen: "true"
        })
      })
    }), createVNode($$Prose, {
      children: [createVNode($$ImageCaption, {
        mobileImgUrl: imageNonoCNT,
        desktopImgUrl: imageNonoCNT,
        alt: "El Cabrero cantando en un acto de CNT. Archivo de archivos libertarios Anselmo Lorenzo",
        caption: "El Cabrero cantando en un acto de CNT. Archivo de archivos libertarios Anselmo Lorenzo.",
        clase: "mt-20",
        hasCaption: true
      }), createVNode($$ImageCaption, {
        mobileImgUrl: imageNono2,
        desktopImgUrl: imageNono2,
        alt: "Mi patria es el mundo entero, mi ley la libertad. Bandera anarquista.",
        caption: "Mi patria es el mundo entero, mi ley la libertad. Bandera anarquista.",
        clase: "",
        hasCaption: true
      }), createVNode(_components.h2, {
        id: "fandangos",
        children: "Fandangos"
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "El Cabrero"
        })
      }), createVNode(_components.p, {
        children: ["Nadie sabe ad\xF3nde llega", createVNode(_components.br, {}), "\nEl lamento de un fandango ", createVNode(_components.br, {}), "\nNadie sabe d\xF3nde llega ", createVNode(_components.br, {}), "\nEs un p\xE1jaro volando ", createVNode(_components.br, {}), "\nQue no entiende de fronteras ", createVNode(_components.br, {}), "\nPor eso me gusta tanto"]
      }), createVNode(_components.p, {
        children: ["Andaluc\xEDa es mi madre ", createVNode(_components.br, {}), "\nY como un hijo la quiero ", createVNode(_components.br, {}), "\nAndaluc\xEDa es mi madre ", createVNode(_components.br, {}), "\nDe coraz\xF3n la venero ", createVNode(_components.br, {}), "\nPero yo soy como el aire ", createVNode(_components.br, {}), "\nY mi patria el mundo entero"]
      })]
    })]
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
const url = "/acciones/nono-murcia";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/nono-murcia.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/nono-murcia.mdx";

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
