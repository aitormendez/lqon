/* empty css                                   */
import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_N4Ixt6P6.mjs';
import { $ as $$Image, b as $$Prose, a as $$Layout } from './briana-weapons_b-aCyiIX.mjs';
import 'clsx';

const frontmatter = {
  "tipo": "accion",
  "autor": "Luc\xEDa Montenegro",
  "titulo": "Casas de cart\xF3n"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "casas-de-cart\xF3n",
    "text": "Casas de Cart\xF3n"
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
          src: "https://iframe.mediadelivery.net/embed/201842/577b0eae-876e-441a-ab9f-830d776e1589?autoplay=false&loop=false&muted=false&preload=true&responsive=true",
          loading: "lazy",
          style: "border:0;position:absolute;top:0;height:100%;width:100%;",
          allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;",
          allowfullscreen: "true"
        })
      })
    }), createVNode($$Prose, {
      children: [createVNode(_components.h2, {
        id: "casas-de-cart\xF3n",
        children: "Casas de Cart\xF3n"
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Los Guaraguao"
        })
      }), createVNode(_components.p, {
        children: ["Que triste se oye la lluvia", createVNode(_components.br, {}), "\nen los techos de cart\xF3n.", createVNode(_components.br, {}), "\nQue triste vive mi gente", createVNode(_components.br, {}), "\nen las casas de cart\xF3n."]
      }), createVNode(_components.p, {
        children: ["Viene bajando el obrero", createVNode(_components.br, {}), "\ncasi arrastrando sus pasos", createVNode(_components.br, {}), "\npor el peso del sufrir.", createVNode(_components.br, {}), "\nMira que mucho ha sufrido", createVNode(_components.br, {}), "\nmira que pesa el sufrir"]
      }), createVNode(_components.p, {
        children: ["Arriba deja la mujer pre\xF1ada", createVNode(_components.br, {}), "\nabajo est\xE1 la ciudad", createVNode(_components.br, {}), "\ny se pierde en su mara\xF1a"]
      }), createVNode(_components.p, {
        children: ["Hoy es lo mismo que ayer,", createVNode(_components.br, {}), "\nes un mundo sin ma\xF1ana."]
      }), createVNode(_components.p, {
        children: ["Que triste se oye la lluvia", createVNode(_components.br, {}), "\nen los techos de cart\xF3n.", createVNode(_components.br, {}), "\nQue triste vive mi gente", createVNode(_components.br, {}), "\nen las casas de cart\xF3n."]
      }), createVNode(_components.p, {
        children: ["Ni\xF1os color de mi tierra", createVNode(_components.br, {}), "\ncon sus mismas cicatrices", createVNode(_components.br, {}), "\nmillonarios de lombrices", createVNode(_components.br, {}), "\ny por eso\u2026", createVNode(_components.br, {}), "\nque triste viven los ni\xF1os", createVNode(_components.br, {}), "\nen las casas de cart\xF3n."]
      }), createVNode(_components.p, {
        children: ["Que alegres viven los perros,", createVNode(_components.br, {}), "\ncasa del explotador."]
      }), createVNode(_components.p, {
        children: ["Usted no lo va a creer", createVNode(_components.br, {}), "\npero hay escuelas de perros", createVNode(_components.br, {}), "\ny les dan educaci\xF3n", createVNode(_components.br, {}), "\npa\u2019 que no muerdan los diarios,", createVNode(_components.br, {}), "\npero el patr\xF3n", createVNode(_components.br, {}), "\nhace a\xF1os muchos a\xF1os", createVNode(_components.br, {}), "\nque est\xE1 mordiendo al obrero."]
      }), createVNode(_components.p, {
        children: ["Que triste se oye la lluvia", createVNode(_components.br, {}), "\nen los techos de cart\xF3n", createVNode(_components.br, {}), "\nque lejos pasa la esperanza", createVNode(_components.br, {}), "\nen las casas de cart\xF3n."]
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
const url = "/acciones/lucia-montenegro";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/lucia-montenegro.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/lucia-montenegro.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
