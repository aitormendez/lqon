/* empty css                                   */
import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_fHSIkPwp.mjs';
import { $ as $$Image, b as $$Prose, a as $$Layout } from './briana-weapons_wVTJbewq.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "tipo": "texto",
  "autor": "Democracia",
  "titulo": "Punk"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "punk",
    "text": "Punk"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode($$Layout, {
    titulo: frontmatter.titulo,
    tipo: frontmatter.tipo,
    autor: frontmatter.autor,
    children: createVNode($$Prose, {
      children: [createVNode(_components.h1, {
        id: "punk",
        children: frontmatter.titulo
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: frontmatter.autor
        })
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
const url = "/textos/punk";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/punk.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/punk.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
