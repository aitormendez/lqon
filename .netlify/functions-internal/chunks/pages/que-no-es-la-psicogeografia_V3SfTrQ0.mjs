/* empty css                                   */
import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_fHSIkPwp.mjs';
import { $ as $$Image, a as $$Layout } from './briana-weapons_lcSVAjS8.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "tipo": "texto",
  "autor": "Luis Navarro",
  "titulo": "Qu\xE9 no es la psicogeograf\xEDa"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$Layout, {
    titulo: frontmatter.titulo,
    tipo: frontmatter.tipo,
    autor: frontmatter.autor,
    children: [createVNode("h1", {
      children: frontmatter.titulo
    }), createVNode("p", {
      children: frontmatter.autor
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
  }) : _createMdxContent();
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/textos/que-no-es-la-psicogeografia";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/que-no-es-la-psicogeografia.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/que-no-es-la-psicogeografia.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
