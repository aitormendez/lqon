/* empty css                                   */
import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from '../astro_2vm9jCdL.mjs';
import { $ as $$Image, a as $$Layout } from './briana-weapons_iEw8Dur2.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "tipo": "accion",
  "autor": "Vicius",
  "titulo": "Vacaciones en Espa\xF1a"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$Layout, {
    title: frontmatter.titulo,
    tipo: frontmatter.tipo,
    autor: frontmatter.autor,
    children: createVNode("p", {
      children: frontmatter.autor
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
  }) : _createMdxContent();
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/acciones/vicius";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vicius.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vicius.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
