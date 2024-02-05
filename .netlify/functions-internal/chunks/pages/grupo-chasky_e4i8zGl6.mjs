/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, n as renderSlot, _ as __astro_tag_component__, F as Fragment$1, p as createVNode } from '../astro_2vm9jCdL.mjs';
import { $ as $$Image, a as $$Layout } from './briana-weapons_iEw8Dur2.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { Tooltip } from 'react-tooltip';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import 'react';

const $$Astro = createAstro();
const $$Prose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Prose;
  return renderTemplate`${maybeRenderHead()}<div class="prose prose-lqon prose-h1:text-5xl prose-h1:font-light prose-p:text-2xl
  prose-a:text-blue-600 prose-img:rounded-xl"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/Prose.astro", void 0);

const CustomTooltip = ({ id, content, children }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "inline cursor-pointer",
        "data-tooltip-id": id,
        "data-tooltip-html": content,
        "data-tooltip-class-name": "max-w-80",
        style: { maxWidth: "300px" },
        disableStyleInjection: true,
        children
      }
    ),
    /* @__PURE__ */ jsx(Tooltip, { id })
  ] });
};

const frontmatter = {
  "tipo": "accion",
  "autor": "Grupo Chasky",
  "titulo": "Movimiento ind\xEDgena"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode($$Layout, {
    title: frontmatter.titulo,
    tipo: frontmatter.tipo,
    autor: frontmatter.autor,
    children: createVNode($$Prose, {
      children: [createVNode("h1", {
        children: frontmatter.autor
      }), createVNode(_components.p, {
        children: "prueba de texto"
      }), createVNode(CustomTooltip, {
        "client:load": true,
        id: "unique-tooltip",
        content: "<div class='max-w-sm'>Este es el <i>contenido</i> del tooltip Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates ipsum illo laboriosam atque eveniet ratione soluta ullam reprehenderit est, minima perferendis veniam nesciunt veritatis dolorum porro quae neque praesentium!",
        "client:component-path": "/Users/aitor/Documents/Sites/lqon/src/components/CustomTooltip.jsx",
        "client:component-export": "default",
        "client:component-hydration": true,
        children: createVNode("sup", {
          children: "1"
        })
      }), createVNode(_components.p, {
        children: "para ver c\xF3mo funciona Lorem ipsum dolor sit amet consectetur adipisicing elit.\nIusto voluptates ipsum illo laboriosam atque eveniet ratione soluta ullam reprehenderit\nest, minima perferendis veniam nesciunt veritatis dolorum porro quae neque praesentium!"
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
const url = "/acciones/grupo-chasky";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/grupo-chasky.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment: Fragment$1, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/grupo-chasky.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
