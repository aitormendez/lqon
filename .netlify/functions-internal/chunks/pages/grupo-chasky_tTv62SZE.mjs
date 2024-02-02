/* empty css                                   */
import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro__iBP4jqW.mjs';
import { $ as $$Image } from './generic_t1i8DRvi.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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
