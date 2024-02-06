/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_fHSIkPwp.mjs';
import { g as getImage, $ as $$Image, b as $$Prose, a as $$Layout } from './briana-weapons_6vpbGIWf.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const imageElvisDesktop = new Proxy({"src":"/_astro/oscar-cabanas-elvis-desktop.dLx_mnoK.png","width":1500,"height":1500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageElvisMobile = new Proxy({"src":"/_astro/oscar-cabanas-elvis-mobile.8SuqJYak.png","width":800,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$ImageNoCaption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageNoCaption;
  const { mobileImgUrl, desktopImgUrl, alt } = Astro2.props;
  const mobileImg = await getImage({
    src: mobileImgUrl,
    format: "webp",
    width: 200,
    height: 200
  });
  const desktopImg = await getImage({
    src: desktopImgUrl,
    format: "webp",
    width: 800,
    height: 200
  });
  return renderTemplate`${maybeRenderHead()}<figure> <picture> <source media="(max-width: 799px)"${addAttribute(mobileImg.src, "srcset")}> <source media="(min-width: 800px)"${addAttribute(desktopImg.src, "srcset")}> <img${addAttribute(desktopImg.src, "src")}${addAttribute(alt, "alt")}> </picture> <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> </figure>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/ImageNoCaption.astro", void 0);

const frontmatter = {
  "tipo": "accion",
  "autor": "Oscar cabanas",
  "titulo": "Mandam\xE1s"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "big-boss-man-jimmy-reed",
    "text": "Big boss man. Jimmy Reed"
  }, {
    "depth": 2,
    "slug": "mandam\xE1s-carlos-segarra",
    "text": "Mandam\xE1s. Carlos Segarra"
  }, {
    "depth": 2,
    "slug": "mandam\xE1s-\xF3scar-cabanas-ojkital",
    "text": "MANDAM\xC1S-\xD3scar Cabanas \u201COjkital\u201D."
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
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
          src: "https://iframe.mediadelivery.net/embed/201842/076c5a77-c9e9-4ad8-ada0-be46e9ff8814?autoplay=false&loop=false&muted=false&preload=true&responsive=true",
          loading: "lazy",
          style: "border:0;position:absolute;top:0;height:100%;width:100%;",
          allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;",
          allowfullscreen: "true"
        })
      })
    }), createVNode($$Prose, {
      children: [createVNode($$ImageNoCaption, {
        mobileImgUrl: imageElvisMobile,
        desktopImgUrl: imageElvisDesktop,
        alt: "Portada disco Elvis. Big Boss Man"
      }), createVNode(_components.h2, {
        id: "big-boss-man-jimmy-reed",
        children: ["Big boss man. ", createVNode(_components.em, {
          children: "Jimmy Reed"
        })]
      }), createVNode(_components.p, {
        children: "Big boss manCan\u2019t you hear me when I call?Big boss manCan\u2019t you hear me when I call?"
      }), createVNode(_components.p, {
        children: "Well, you ain\u2019t so bigYou\u2019re just tall, that\u2019s allGot me working, boss manWorking \u2018round the clock"
      }), createVNode(_components.p, {
        children: "I want me a drink of waterBut you won\u2019t let Jimmy, stop"
      }), createVNode(_components.p, {
        children: "Big boss manCan\u2019t you hear me when I call?Well, you ain\u2019t so bigYou just tall, that\u2019s all"
      }), createVNode(_components.p, {
        children: "Well, I m gonna get me a boss manOne gonna treat me rightWork hard in the day timeRest easy at night"
      }), createVNode(_components.p, {
        children: "Big boss manCan\u2019t you hear me when I call?Well, you ain\u2019t so bigYou re just tall, that\u2019s all"
      }), createVNode(_components.h2, {
        id: "mandam\xE1s-carlos-segarra",
        children: ["Mandam\xE1s. ", createVNode(_components.em, {
          children: "Carlos Segarra"
        })]
      }), createVNode(_components.p, {
        children: "Trabajo para ti\nHasta la puesta del sol\nNo s\xE9 ni tu nombre\nSolo te llamo patr\xF3n"
      }), createVNode(_components.p, {
        children: "Mandam\xE1s,\na\xFAn no sabes qui\xE9n soy yo\nEl d\xEDa que no seas el amo\nNo me supliques perd\xF3n"
      }), createVNode(_components.p, {
        children: "Tienes mi trabajo\nPero no mi voluntad\nPor cuatro perras gordas\nNo puedes pedir m\xE1s."
      }), createVNode(_components.p, {
        children: "Mandam\xE1s\nDime si oyes mi voz\nYo soy quien tira del carro\nSi me paro paras tu"
      }), createVNode(_components.p, {
        children: "\xD3yeme bien mandam\xE1s"
      }), createVNode(_components.p, {
        children: "Mandam\xE1s\nDime si oyes mi voz"
      }), createVNode(_components.p, {
        children: "Mandam\xE1s\nNo s\xE9 si oyes mi voz"
      }), createVNode(_components.p, {
        children: "El d\xEDa que no seas el amo\nNo esperes mi perd\xF3n."
      }), createVNode(_components.p, {
        children: "Mandam\xE1s,\nAlg\xFAn d\xEDa ser\xE1 tu d\xEDa\nY yo te estar\xE9 esperando\nCon algo m\xE1s\nQue los dedos de la mano\nY no ha sido mi culpa\nT\xFA llegaste antes que yo\nY aqu\xED te estar\xE9 esperando\nY so\xF1ando"
      }), createVNode(_components.h2, {
        id: "mandam\xE1s-\xF3scar-cabanas-ojkital",
        children: "MANDAM\xC1S-\xD3scar Cabanas \u201COjkital\u201D."
      }), createVNode(_components.p, {
        children: "Mandam\xE1s, aunque alto te veas t\xFA,\nMandam\xE1s, aunque alto te veas t\xFA,\nno puedes comprar su talento\nni puedes tener su blues"
      }), createVNode(_components.p, {
        children: "Y aquel chaval\u2026\nPor un pu\xF1ao de perras\nsu alma te vendi\xF3,\npor la m\xFAsica cl\xE1sica\nsu barrio abandon\xF3"
      }), createVNode(_components.p, {
        children: "Mandam\xE1s, aunque alto te veas t\xFA,\nMandam\xE1s, aunque alto te veas t\xFA,\nno puedes comprar su talento\nni puedes tener su blues"
      }), createVNode(_components.p, {
        children: "Y aquel chavalCant\xF3 e Rigolleto,\ncant\xF3 Bella Bartok,\ncant\xF3 puta zarzuela\xA1\nLa madre que la pari\xF3!"
      }), createVNode(_components.p, {
        children: "Mandam\xE1s, aunque alto te veas t\xFA,\nMandam\xE1s, aunque alto te veas t\xFA,\nno puedes comprar su talento\nni puedes tener su blues"
      }), createVNode(_components.p, {
        children: "Y la m\xFAsica clasica\nle exprimi\xF3 y le escupi\xF3\npero \xE9l cogi\xF3 su armonica\ny a Usera se volvi\xF3\nMandam\xE1s, aunque alto te veas t\xFA,\nMandam\xE1s, aunque alto te veas t\xFA,\n\xC9l sigue siendo el puto amo\nen el Real o en Orcasur"
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
const url = "/acciones/oscar-cabanas";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/oscar-cabanas.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/acciones/oscar-cabanas.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
