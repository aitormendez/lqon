/* empty css                                   */
import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_fHSIkPwp.mjs';
import { $ as $$Image, b as $$Prose, a as $$Layout } from './briana-weapons_6vpbGIWf.mjs';
import 'html-escaper';
import 'clsx';

const frontmatter = {
  "tipo": "accion",
  "autor": "Luc\xEDa Montenegro",
  "titulo": ""
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
    }), createVNode($$Prose, {})]
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
