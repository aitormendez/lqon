/* empty css                                             */
import { _ as __astro_tag_component__, c as createVNode, F as Fragment } from '../../chunks/astro/server_Zajxhskx.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_CNs7P3E_.mjs';
import { $ as $$Layout } from '../../chunks/Layout_ClbmJAAN.mjs';
import { $ as $$Prose } from '../../chunks/Prose_Cyz7FRj5.mjs';
import { $ as $$ImageCaption } from '../../chunks/ImageCaption_CTTwAwq1.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const imageCartelDesktop = new Proxy({"src":"/_astro/gorreta-cartel-desktop.B1p4tXRX.jpg","width":800,"height":1066,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/gorreta-cartel-desktop.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "tipo": "accion",
  "autor": "Juan Carlos Gorreta",
  "titulo": "La vida de los esclavos en el siglo XXI"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "la-vida-de-los-esclavos-en-el-siglo-xxi",
    "text": "La vida de los esclavos en el siglo XXI"
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
          src: "https://iframe.mediadelivery.net/embed/201842/a91e35af-1322-4e13-b0fd-ad5019c8402a?autoplay=false&loop=false&muted=false&preload=true&responsive=true",
          loading: "lazy",
          style: "border:0;position:absolute;top:0;height:100%;width:100%;",
          allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;",
          allowfullscreen: "true"
        })
      })
    }), createVNode($$Prose, {
      children: [createVNode($$ImageCaption, {
        mobileImgUrl: imageCartelDesktop,
        desktopImgUrl: imageCartelDesktop,
        caption: "Pie de foto",
        alt: "Cartel Abajo el Trabajo",
        clase: "mt-20",
        hasCaption: false
      }), createVNode(_components.h2, {
        id: "la-vida-de-los-esclavos-en-el-siglo-xxi",
        children: "La vida de los esclavos en el siglo XXI"
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Gatillazo"
        })
      }), createVNode(_components.p, {
        children: ["Un trabajo de mierda", createVNode(_components.br, {}), "\nUna casa peque\xF1aUn amor aplastado", createVNode(_components.br, {}), "\nPor impuestos y deudas", createVNode(_components.br, {}), "\nUnos ni\xF1os preciosos", createVNode(_components.br, {}), "\nAprendiendo en la escuela", createVNode(_components.br, {}), "\nLa vida de los esclavos en el siglo XXI"]
      }), createVNode(_components.p, {
        children: ["La vida de los esclavos en el siglo XXI", createVNode(_components.br, {}), "\nLa vida de los esclavos en el siglo XXI"]
      }), createVNode(_components.p, {
        children: ["Atrapados en el precio", createVNode(_components.br, {}), "\nDe una crisis eterna", createVNode(_components.br, {}), "\nPor tener esas cosas", createVNode(_components.br, {}), "\nQue no nos interesan", createVNode(_components.br, {}), "\nProtestar d\xE9bilmente", createVNode(_components.br, {}), "\nReprimidos con fuerza", createVNode(_components.br, {}), "\nLa vida de los esclavos en el siglo XXI"]
      }), createVNode(_components.p, {
        children: ["La vida de los esclavos en el siglo XXI", createVNode(_components.br, {}), "\nLa vida de los esclavos en el siglo XXI"]
      }), createVNode(_components.p, {
        children: ["Unos nos arrastramos", createVNode(_components.br, {}), "\nOtros sue\xF1an con ello", createVNode(_components.br, {}), "\nUnos se desesperanOtros se suicidad", createVNode(_components.br, {}), "\nBuscando una maneraDe librarse de esto", createVNode(_components.br, {}), "\nDe una vida de esclavos en el siglo XXI"]
      }), createVNode(_components.p, {
        children: ["La vida de los esclavos en el siglo XXI", createVNode(_components.br, {}), "\nLa vida de los esclavos en el siglo XXI", createVNode(_components.br, {}), "\nLa vida de los esclavos, la vida de los esclavos", createVNode(_components.br, {}), "\nLa vida de los esclavos en el siglo XXI"]
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
const url = "/acciones/juan-carlos-gorreta";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/juan-carlos-gorreta.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/juan-carlos-gorreta.mdx";

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
