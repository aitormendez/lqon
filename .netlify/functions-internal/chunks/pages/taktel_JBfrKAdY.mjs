/* empty css                                   */
import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_N4Ixt6P6.mjs';
import { $ as $$Image, b as $$Prose, a as $$Layout } from './briana-weapons_b-aCyiIX.mjs';
import { $ as $$ImageCaption } from './canciones-de-trabajo_57CmZ7AF.mjs';
import 'clsx';

const imageCartelDesktop = new Proxy({"src":"/_astro/taktel-cartel-desktop.ngb_dis1.jpg","width":800,"height":1131,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "tipo": "accion",
  "autor": "Taktel",
  "titulo": "Reacci\xF3n en cadena"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "reacci\xF3n-en-cadena",
    "text": "Reacci\xF3n en cadena"
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
          src: "https://iframe.mediadelivery.net/embed/201842/5e39e1ec-8345-4d9d-a49f-1f9c34cf07e8?autoplay=false&loop=false&muted=false&preload=true&responsive=true",
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
        alt: "alt",
        clase: "mt-20"
      }), createVNode(_components.h2, {
        id: "reacci\xF3n-en-cadena",
        children: "Reacci\xF3n en cadena"
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Dif\xEDcil equilibrio"
        })
      }), createVNode(_components.p, {
        children: ["Trabajar es libertad", createVNode(_components.br, {}), "\nLibertad es obedecer", createVNode(_components.br, {}), "\nObedecer es progreso", createVNode(_components.br, {}), "\nProgreso es sumisi\xF3n", createVNode(_components.br, {}), "\nSumisi\xF3n es riqueza", createVNode(_components.br, {}), "\nRiqueza es expoliar", createVNode(_components.br, {}), "\nExpoliar es desarrollo", createVNode(_components.br, {}), "\nDesarrollo es consumir"]
      }), createVNode(_components.p, {
        children: ["Gritad conmigo:", createVNode(_components.br, {}), "\n\xA1El trabajo os har\xE1 libres!"]
      }), createVNode(_components.p, {
        children: ["Consumir es democracia", createVNode(_components.br, {}), "\nDemocracia es silenciar", createVNode(_components.br, {}), "\nSilenciar es producir", createVNode(_components.br, {}), "\nProducir es tu religi\xF3n", createVNode(_components.br, {}), "\nReligi\xF3n es beneficio", createVNode(_components.br, {}), "\nBeneficio es justicia", createVNode(_components.br, {}), "\nJusticia es dinero", createVNode(_components.br, {}), "\nY el dinero es Dios"]
      }), createVNode(_components.p, {
        children: ["Gritad conmigo:", createVNode(_components.br, {}), "\n\xA1El trabajo os har\xE1 libres!\\"]
      }), createVNode(_components.p, {
        children: ["Dios es violencia", createVNode(_components.br, {}), "\nViolencia es capitalismo", createVNode(_components.br, {}), "\nCapitalismo es guerra", createVNode(_components.br, {}), "\nLa guerra es paz", createVNode(_components.br, {}), "\nY la paz es temor", createVNode(_components.br, {}), "\nTemor es prosperidad", createVNode(_components.br, {}), "\nProsperidad es abuso", createVNode(_components.br, {}), "\nAbuso es salario"]
      }), createVNode(_components.p, {
        children: ["Gritad conmigo", createVNode(_components.br, {}), "\nGritad conmigo:", createVNode(_components.br, {}), "\n\xA1El trabajo os har\xE1 libres!"]
      }), createVNode(_components.p, {
        children: ["Salario es deuda", createVNode(_components.br, {}), "\nLa deuda es \xE9xito", createVNode(_components.br, {}), "\n\xC9xito es especulaci\xF3n", createVNode(_components.br, {}), "\nEspeculaci\xF3n es control", createVNode(_components.br, {}), "\nControl es televisi\xF3n", createVNode(_components.br, {}), "\nTelevisi\xF3n es quimera", createVNode(_components.br, {}), "\nQuimera es cr\xE9dito", createVNode(_components.br, {}), "\nCr\xE9dito es econom\xEDa", createVNode(_components.br, {}), "\nEconom\xEDa es ley", createVNode(_components.br, {}), "\nLa ley es trabajar", createVNode(_components.br, {}), "\nY trabajar es libertad"]
      }), createVNode(_components.p, {
        children: ["Gritad conmigo", createVNode(_components.br, {}), "\nGritad conmigo:", createVNode(_components.br, {}), "\n\xA1El trabajo os har\xE1 libres!"]
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
const url = "/acciones/taktel";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/taktel.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/taktel.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
