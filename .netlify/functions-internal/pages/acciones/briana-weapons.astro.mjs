/* empty css                                             */
import { _ as __astro_tag_component__, c as createVNode, F as Fragment } from '../../chunks/astro/server_Zajxhskx.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_CNs7P3E_.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DazPIoD3.mjs';
import { $ as $$Prose } from '../../chunks/Prose_Cyz7FRj5.mjs';
import { $ as $$ImageCaption } from '../../chunks/ImageCaption_CTTwAwq1.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const imageRaphael = new Proxy({"src":"/_astro/raphael.CA9tPFMJ.png","width":1688,"height":1688,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/raphael.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "tipo": "accion",
  "autor": "Briana Weapons",
  "titulo": "La canci\xF3n del trabajo"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "la-canci\xF3n-del-trabajo",
    "text": "La canci\xF3n del trabajo"
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
          src: "https://iframe.mediadelivery.net/embed/201842/4a644d08-d8f1-4960-829d-0c4bc1fc8023?autoplay=false&loop=false&muted=false&preload=true&responsive=true",
          loading: "lazy",
          style: "border:0;position:absolute;top:0;height:100%;width:100%;",
          allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;",
          allowfullscreen: "true"
        })
      })
    }), createVNode($$Prose, {
      children: [createVNode($$ImageCaption, {
        mobileImgUrl: imageRaphael,
        desktopImgUrl: imageRaphael,
        caption: "La canci\xF3n del trabajo. Raphael",
        alt: "La canci\xF3n del trabajo. Raphael",
        clase: "mt-20"
      }), createVNode(_components.h2, {
        id: "la-canci\xF3n-del-trabajo",
        children: "La canci\xF3n del trabajo"
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Raphael"
        })
      }), createVNode(_components.p, {
        children: ["Arrastrar la dura cadena", createVNode(_components.br, {}), "\nTrabajar sin tregua y sin fin", createVNode(_components.br, {}), "\nEs lo mismo que una condena", createVNode(_components.br, {}), "\nQue ninguno puede eludir"]
      }), createVNode(_components.p, {
        children: ["El trabajo nace con la persona", createVNode(_components.br, {}), "\nVa grabado sobre su piel, y ya siempre", createVNode(_components.br, {}), "\nLe acompa\xF1a", createVNode(_components.br, {}), "\nComo el amigo m\xE1s fiel"]
      }), createVNode(_components.p, {
        children: ["Trabajar con nieve y con fr\xEDo", createVNode(_components.br, {}), "\nCon la fe del que ha de triunfar", createVNode(_components.br, {}), "\nPorque el agua que lleva el r\xEDo", createVNode(_components.br, {}), "\nNo regresa nunca del mar"]
      }), createVNode(_components.p, {
        children: ["El trabajo nace con la persona", createVNode(_components.br, {}), "\nVa grabado sobre su piel, y ya siempre", createVNode(_components.br, {}), "\nLe acompa\xF1a", createVNode(_components.br, {}), "\nComo el amigo m\xE1s fiel"]
      }), createVNode(_components.p, {
        children: ["Vale m\xE1s tener confianza", createVNode(_components.br, {}), "\nY luchar por algo mejor", createVNode(_components.br, {}), "\nTrabajar con fe y esperanza", createVNode(_components.br, {}), "\nPor lograr un mundo de amor"]
      }), createVNode(_components.p, {
        children: ["El trabajo nace con la persona", createVNode(_components.br, {}), "\nVa grabado sobre su piel, y ya siempre", createVNode(_components.br, {}), "\nLe acompa\xF1a", createVNode(_components.br, {}), "\nComo el amigo m\xE1s fiel"]
      }), createVNode(_components.p, {
        children: ["Arrastrar la dura cadena", createVNode(_components.br, {}), "\nTrabajar sin tregua y sin fin", createVNode(_components.br, {}), "\nEs lo mismo que una condena", createVNode(_components.br, {}), "\nQue ninguno puede eludir"]
      }), createVNode(_components.p, {
        children: ["El trabajo nace con la persona", createVNode(_components.br, {}), "\nEl trabajo nace con la persona", createVNode(_components.br, {}), "\nEl trabajo nace con la persona"]
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
const url = "/acciones/briana-weapons";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/briana-weapons.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/briana-weapons.mdx";

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
