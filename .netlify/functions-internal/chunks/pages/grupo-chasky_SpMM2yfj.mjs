import 'react/jsx-runtime';
import 'react';
import 'react-tooltip';
/* empty css                                   */
import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_N4Ixt6P6.mjs';
import { $ as $$Image, b as $$Prose, a as $$Layout } from './briana-weapons_b-aCyiIX.mjs';
import 'clsx';

const frontmatter = {
  "tipo": "accion",
  "autor": "Grupo Chasky",
  "titulo": "Movimiento ind\xEDgena"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "movimiento-ind\xEDgena",
    "text": "Movimiento Ind\xEDgena"
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
          src: "https://iframe.mediadelivery.net/embed/201842/c244011c-d2da-4ddb-97f2-18f139356f39?autoplay=false&loop=false&muted=false&preload=true&responsive=true",
          loading: "lazy",
          style: "border:0;position:absolute;top:0;height:100%;width:100%;",
          allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;",
          allowfullscreen: "true"
        })
      })
    }), createVNode($$Prose, {
      children: [createVNode(_components.h2, {
        id: "movimiento-ind\xEDgena",
        children: "Movimiento Ind\xEDgena"
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Charijayac"
        })
      }), createVNode(_components.p, {
        children: ["Siempre son los mismos dirigiendo el pa\xEDs,", createVNode(_components.br, {}), "\nun cambio de aires florecer\xE1 el jard\xEDn", createVNode(_components.br, {}), "\n,si quieres que los sue\xF1os se hagan realidad:", createVNode(_components.br, {}), "\ndespierta y \xFAnete a la soluci\xF3n."]
      }), createVNode(_components.p, {
        children: ["Siembra, canta donde est\xE1s,", createVNode(_components.br, {}), "\nMovimiento Ind\xEDgena por la dignidad,", createVNode(_components.br, {}), "\nel pueblo que lucha contra la corrupci\xF3n,", createVNode(_components.br, {}), "\ncuido el patrimonio que me ha dejado el sol."]
      }), createVNode(_components.p, {
        children: ["Si no nos escuchan,", createVNode(_components.br, {}), "\nporque tenemos raz\xF3n,", createVNode(_components.br, {}), "\nse paraliza el pa\xEDs."]
      }), createVNode(_components.p, {
        children: "Y nos vamos todos juntos."
      }), createVNode(_components.p, {
        children: "\xA1Que los ni\xF1os sonr\xEDan!"
      }), createVNode(_components.p, {
        children: ["Siempre son los mismos dirigiendo el pa\xEDs,", createVNode(_components.br, {}), "\nun cambio de aires florecer\xE1 el jard\xEDn,", createVNode(_components.br, {}), "\nsi quieres que los sue\xF1os se hagan realidad:", createVNode(_components.br, {}), "\ndespierta y \xFAnete a la soluci\xF3n."]
      }), createVNode(_components.p, {
        children: ["Siembra, canta donde est\xE1s,", createVNode(_components.br, {}), "\nMovimiento Ind\xEDgena por la dignidad,", createVNode(_components.br, {}), "\nel pueblo que lucha contra la corrupci\xF3n,", createVNode(_components.br, {}), "\ncuido el patrimonio que me ha dejado el sol."]
      }), createVNode(_components.p, {
        children: ["Ilumina el alma del rojo, del blanco, del negro y del amarillo.", createVNode(_components.br, {}), "\nY nos vamos,", createVNode(_components.br, {}), "\ncon la conciencia tranquila."]
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
const url = "/acciones/grupo-chasky";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/grupo-chasky.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/grupo-chasky.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
