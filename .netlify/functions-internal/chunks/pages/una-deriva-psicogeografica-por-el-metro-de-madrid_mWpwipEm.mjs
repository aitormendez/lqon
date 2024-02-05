/* empty css                                   */
import { _ as __astro_tag_component__, F as Fragment, p as createVNode } from '../astro_2vm9jCdL.mjs';
import { $ as $$Image, a as $$Layout } from './briana-weapons_iEw8Dur2.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "tipo": "texto",
  "autor": "Luis Navarro",
  "titulo": "Una deriva psicogeogr\xE1fica por el metro de Madrid"
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
const url = "/textos/una-deriva-psicogeografica-por-el-metro-de-madrid";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
