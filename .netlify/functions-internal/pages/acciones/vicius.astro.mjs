/* empty css                                             */
import { _ as __astro_tag_component__, c as createVNode, F as Fragment } from '../../chunks/astro/server_Zajxhskx.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_CNs7P3E_.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DazPIoD3.mjs';
import { $ as $$Prose } from '../../chunks/Prose_Cyz7FRj5.mjs';
import { $ as $$ImageCaption } from '../../chunks/ImageCaption_CTTwAwq1.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const imagePortadaMobile = new Proxy({"src":"/_astro/vicius-1-vacaciones-mobile.DthH9LE3.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/vicius-1-vacaciones-mobile.jpg";
							}
							
							return target[name];
						}
					});

const imagePortadaDesktop = new Proxy({"src":"/_astro/vicius-1-vacaciones-desktop.Bt7rxD7X.jpg","width":800,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/vicius-1-vacaciones-desktop.jpg";
							}
							
							return target[name];
						}
					});

const imageContraportadaMobile = new Proxy({"src":"/_astro/vicius-2-vacaciones-mobile.Cq0XntCC.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/vicius-2-vacaciones-mobile.jpg";
							}
							
							return target[name];
						}
					});

const imageContraportadaDesktop = new Proxy({"src":"/_astro/vicius-2-vacaciones-desktop.BDAEatST.jpg","width":800,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/vicius-2-vacaciones-desktop.jpg";
							}
							
							return target[name];
						}
					});

const imageToreroTerrorista = new Proxy({"src":"/_astro/torero-terrorista.MUZPKPV5.jpg","width":1240,"height":1730,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/torero-terrorista.jpg";
							}
							
							return target[name];
						}
					});

const imageFosa = new Proxy({"src":"/_astro/Spanish_Civil_War.et_6aeaR.jpg","width":1024,"height":692,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/Spanish_Civil_War.jpg";
							}
							
							return target[name];
						}
					});

const imageToros = new Proxy({"src":"/_astro/toros-vicius.1zmY7rIT.jpg","width":568,"height":1600,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aitor/Documents/Sites/lqon/src/assets/img/toros-vicius.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "tipo": "accion",
  "autor": "Vicius",
  "titulo": "Vacaciones en Espa\xF1a"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "vacaciones-en-espa\xF1a",
    "text": "Vacaciones en Espa\xF1a"
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
          src: "https://iframe.mediadelivery.net/embed/201842/15f8c14a-b084-445b-9cd7-fb265c252440?autoplay=false&loop=false&muted=false&preload=true&responsive=true",
          loading: "lazy",
          style: "border:0;position:absolute;top:0;height:100%;width:100%;",
          allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;",
          allowfullscreen: "true"
        })
      })
    }), createVNode($$Prose, {
      children: [createVNode($$ImageCaption, {
        mobileImgUrl: imagePortadaMobile,
        desktopImgUrl: imagePortadaDesktop,
        caption: "Vacaciones en Espa\xF1a. Contra la democracia. Portada",
        alt: "alt",
        clase: "mt-20",
        hasCaption: true
      }), createVNode($$ImageCaption, {
        mobileImgUrl: imageContraportadaMobile,
        desktopImgUrl: imageContraportadaDesktop,
        caption: "Vacaciones en Espa\xF1a. Contra la democracia. Contraportada",
        alt: "alt",
        clase: "mt-20",
        hasCaption: true
      }), createVNode($$ImageCaption, {
        mobileImgUrl: imageToreroTerrorista,
        desktopImgUrl: imageToreroTerrorista,
        caption: "Camiseta de Hola por qu\xE9 para el grupo Sistema de monos",
        alt: "alt",
        clase: "mt-20",
        hasCaption: true
      }), createVNode($$ImageCaption, {
        mobileImgUrl: imageToros,
        desktopImgUrl: imageToros,
        caption: "Gran Corrida de toros, Madrid, 1940",
        alt: "Gran Corrida de toros, Madrid, 1940",
        clase: "mt-20",
        hasCaption: true
      }), createVNode($$ImageCaption, {
        mobileImgUrl: imageFosa,
        desktopImgUrl: imageFosa,
        caption: "Fosa com\xFAn de la guerra civil espa\xF1ola. Monte de Esteparias (Burgos) Fotograf\xEDa: Espacio tangente",
        alt: "alt",
        clase: "mt-20",
        hasCaption: true
      }), createVNode(_components.h2, {
        id: "vacaciones-en-espa\xF1a",
        children: "Vacaciones en Espa\xF1a"
      }), createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "Contra la democracia"
        })
      }), createVNode(_components.p, {
        children: ["As\xED que piensas t\xFA que es tu sangre azul", createVNode(_components.br, {}), "\nporque naciste en el lado cool", createVNode(_components.br, {}), "\nYa no existe el muro de Berl\xEDn", createVNode(_components.br, {}), "\nnos lo hab\xE9is tra\xEDdo al sur.", createVNode(_components.br, {}), "\nVive con lo puesto y sigue lo dispuesto", createVNode(_components.br, {}), "\npor las Fuerzas de Seguridad.", createVNode(_components.br, {}), "\nCurra dando gracias por la democracia", createVNode(_components.br, {}), "\ny la Reforma Laboral.", createVNode(_components.br, {}), "\nVen a gozar de sol y libertad", createVNode(_components.br, {}), "\npero hoy entrar\xE1s por la puerta de atr\xE1s.", createVNode(_components.br, {}), "\nVas a sentir calor.", createVNode(_components.br, {}), "\nVas a pasar pasi\xF3n."]
      }), createVNode(_components.p, {
        children: ["Vacaciones en Espa\xF1a", createVNode(_components.br, {}), "\nMucha fiesta y diversi\xF3n", createVNode(_components.br, {}), "\ncon el tiempo y una ca\xF1a", createVNode(_components.br, {}), "\nseguiremos cara al sol."]
      }), createVNode(_components.p, {
        children: ["Todo por la patria, todo por la pasta", createVNode(_components.br, {}), "\ncorrupci\xF3n y represi\xF3n.", createVNode(_components.br, {}), "\nUn mill\xF3n de muertos no lo tapa el tiempo", createVNode(_components.br, {}), "\nni la falsa Transici\xF3n.", createVNode(_components.br, {}), "\nNovio de la muerte, vas a tener suerte", createVNode(_components.br, {}), "\nHoy te van a fusilar", createVNode(_components.br, {}), "\nDejar\xE1s tu vida en una corrida", createVNode(_components.br, {}), "\ncon bravura y dignidad.", createVNode(_components.br, {}), "\nVen a disfrutar la Fiesta Nacional", createVNode(_components.br, {}), "\npero hoy jugar\xE1s la Gran Final.", createVNode(_components.br, {}), "\nVas a sentir calor.", createVNode(_components.br, {}), "\nVas a pasar pasi\xF3n."]
      }), createVNode(_components.p, {
        children: ["Vacaciones en Espa\xF1a", createVNode(_components.br, {}), "\nen la guerra y en la paz", createVNode(_components.br, {}), "\nenterrado en la monta\xF1a", createVNode(_components.br, {}), "\no arrojado al puto mar."]
      }), createVNode(_components.p, {
        children: "Spain is pain"
      }), createVNode(_components.p, {
        children: ["Vacaciones en Espa\xF1a", createVNode(_components.br, {}), "\nMucha fiesta y diversi\xF3n", createVNode(_components.br, {}), "\ncon el tiempo y una ca\xF1a", createVNode(_components.br, {}), "\nseguiremos cara al sol."]
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
const url = "/acciones/vicius";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vicius.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vicius.mdx";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
