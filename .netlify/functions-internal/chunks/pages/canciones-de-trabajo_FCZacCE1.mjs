/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_N4Ixt6P6.mjs';
import { g as getImage, $ as $$Image, a as $$Layout, b as $$Prose } from './briana-weapons_qK5G95lh.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ImageCaption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageCaption;
  const {
    mobileImgUrl,
    desktopImgUrl,
    alt,
    caption,
    clase,
    hasCaption = true
  } = Astro2.props;
  const mobileImg = await getImage({
    src: mobileImgUrl,
    format: "webp",
    width: 400
  });
  const desktopImg = await getImage({
    src: desktopImgUrl,
    format: "webp",
    width: 800
  });
  return renderTemplate`${maybeRenderHead()}<figure${addAttribute(clase, "class")}> <picture> <source media="(max-width: 799px)"${addAttribute(mobileImg.src, "srcset")}> <source media="(min-width: 800px)"${addAttribute(desktopImg.src, "srcset")}> <img${addAttribute(desktopImg.src, "src")}${addAttribute(alt, "alt")}> </picture> ${hasCaption && renderTemplate`<figcaption>${unescapeHTML(caption)}</figcaption>`} </figure>`;
}, "/Users/aitor/Documents/Sites/lqon/src/components/ImageCaption.astro", void 0);

const imageArbeitMobile = new Proxy({"src":"/_astro/Arbeit_macht_frei-mobile.JDWXnbvu.jpg","width":400,"height":300,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageArbeitDesktop = new Proxy({"src":"/_astro/Arbeit_macht_frei-desktop.Nku3K0s8.jpg","width":800,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageCartelMobile = new Proxy({"src":"/_astro/cartel-mobile.OtPu-i4-.jpg","width":289,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageCartelDesktop = new Proxy({"src":"/_astro/cartel-desktop.MsZAPEy_.jpg","width":579,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageAlarmMobile = new Proxy({"src":"/_astro/alarm-clock-mobile.9IQ02hW4.jpg","width":400,"height":181,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageAlarmDesktop = new Proxy({"src":"/_astro/alarm-clock-desktop.QYRCa9J-.jpg","width":800,"height":363,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageAfricansMobile = new Proxy({"src":"/_astro/africans-americans-mobile.qsmMDR7P.jpg","width":400,"height":254,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageAfricansDesktop = new Proxy({"src":"/_astro/africans-americans-desktop.LzWxaBMi.jpg","width":800,"height":509,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageIntervencion1Mobile = new Proxy({"src":"/_astro/intervincion-anonima-1-mobile.48KfBGlU.jpg","width":400,"height":300,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageIntervencion1Desktop = new Proxy({"src":"/_astro/intervincion-anonima-1-desktop.OyCK-EVW.jpg","width":800,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageIntervencion2Mobile = new Proxy({"src":"/_astro/intervincion-anonima-2-mobile.sZ39Gll0.jpg","width":400,"height":300,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const imageIntervencion2Desktop = new Proxy({"src":"/_astro/intervincion-anonima-2-desktop.K3_XF82A.jpg","width":800,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "tipo": "texto",
  "autor": "Daniel Villegas",
  "titulo": "Recuperaci\xF3n & Reexplotaci\xF3n. Acerca de las canciones de trabajo"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "recuperaci\xF3n--reexplotaci\xF3n-acerca-de-las-canciones-de-trabajo",
    "text": "Recuperaci\xF3n & Reexplotaci\xF3n. Acerca de las canciones de trabajo"
  }, {
    "depth": 2,
    "slug": "coda-en-torno-a-las-canciones-de-resistencia-abolici\xF3n-del-trabajo",
    "text": "Coda en torno a las canciones de resistencia-abolici\xF3n del trabajo"
  }, {
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    sup: "sup",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Layout, {
      titulo: frontmatter.titulo,
      tipo: frontmatter.tipo,
      autor: frontmatter.autor,
      children: createVNode($$Prose, {
        children: [createVNode(_components.h1, {
          id: "recuperaci\xF3n--reexplotaci\xF3n-acerca-de-las-canciones-de-trabajo",
          children: frontmatter.titulo
        }), createVNode(_components.p, {
          children: createVNode(_components.em, {
            children: frontmatter.autor
          })
        }), createVNode($$ImageCaption, {
          mobileImgUrl: imageIntervencion2Mobile,
          desktopImgUrl: imageIntervencion2Desktop,
          caption: "Pie de foto",
          alt: "alt"
        }), createVNode($$ImageCaption, {
          mobileImgUrl: imageIntervencion1Mobile,
          desktopImgUrl: imageIntervencion1Desktop,
          caption: "Pie de foto",
          alt: "alt"
        }), createVNode($$ImageCaption, {
          mobileImgUrl: imageAfricansMobile,
          desktopImgUrl: imageAfricansDesktop,
          caption: "Pie de foto",
          alt: "alt"
        }), createVNode($$ImageCaption, {
          mobileImgUrl: imageAlarmMobile,
          desktopImgUrl: imageAlarmDesktop,
          caption: "Pie de foto",
          alt: "alt"
        }), createVNode($$ImageCaption, {
          mobileImgUrl: imageCartelMobile,
          desktopImgUrl: imageCartelDesktop,
          caption: "Pie de foto",
          alt: "alt"
        }), createVNode(_components.p, {
          children: ["La relaci\xF3n entre la m\xFAsica popular y el trabajo es una historia antigua. Precisar su origen, como el de tantos fen\xF3menos hist\xF3ricos, resulta complejo y, hasta cierto punto, sin un mayor inter\xE9s. Lo que, sin embargo, ser\xEDa \xFAtil para entender dicho v\xEDnculo es examinar la genealog\xEDa de aquellas expresiones culturales que se han manifestado en este \xE1mbito. As\xED, podemos rastrear en diversos contextos la existencia de canciones de trabajo que, con m\xFAltiples funciones, atraviesan distintos espacios geogr\xE1ficos y temporales. Tradicionalmente en \xC1frica y Europa, por citar algunos de ellos, encontramos ejemplos de tales manifestaciones. Desde al menos la Edad Media en este \xFAltimo enclave aparecen los cantos de siega o canciones de faena, entre otras, cuya funci\xF3n ser\xEDa la de aliviar las cargas del repetitivo trabajo agr\xEDcola. Sin embargo, en su evoluci\xF3n, la canci\xF3n del trabajo desplegar\xE1 muchos otros significados que incluir\xE1n la queja ante las condiciones abusivas, el deseo de emancipaci\xF3n, el resentimiento contra capataces y due\xF1os o la iron\xEDa frente al sistema de explotaci\xF3n que expropia y controla las fuerzas vitales de una parte de poblaci\xF3n en beneficio de otra. Este g\xE9nero musical, en definitiva, aborda las complejas relaciones existentes en las distintas sociedades con sus respectivas nociones de trabajo, teniendo en cuenta que, al menos en Occidente y hasta hace relativamente poco, ha sido entendido predominantemente como un tormento, tal y como se infiere de una etimolog\xEDa que proviene del lat\xEDn ", createVNode(_components.em, {
            children: "tripalium"
          }), ", del que a su vez derivar\xEDa ", createVNode(_components.em, {
            children: "tripaliare"
          }), ", y que se populariz\xF3 en el lenguaje cotidiano como torturar o causar dolor y sufrimiento."]
        }), createVNode(_components.p, {
          children: ["Con la expansi\xF3n del capitalismo colonial-imperial, la emergencia del modelo extractivista y la especializaci\xF3n laboral se producir\xE1 un enorme desarrollo de las canciones de trabajo, extendi\xE9ndose sus variantes a muchos y distintos campos laborales. Ejemplo de ello lo podemos encontrar en la aparici\xF3n, durante el siglo XIX, de distintos palos del flamenco que abordan esta cuesti\xF3n, como los Martinetes, las Mineras o las Trilleras. En la anterior centuria ya se pod\xEDan escuchar, en las plantaciones norteamericanas, las ", createVNode(_components.em, {
            children: "work songs"
          }), " en su modalidad de cantos de esclavitud. De herencia cultural africana, estas canciones de \u201Cllamada y respuesta\u201D que entonaba la poblaci\xF3n esclava ten\xEDan por objeto tanto hacer pervivir la memoria sobre el lugar de origen como expresar un lamento por su p\xE9rdida, las brutales condiciones a las que hab\xEDa sido sometida y, muy especialmente en el caso de las mujeres afroamericanas esclavizadas, establecer un modo de resistencia simb\xF3lico frente a la tiran\xEDa de los terratenientes blancos. Sin embargo, en ocasiones, y en sentido contrario, eran los capataces los que obligaban al canto para mantener el ritmo de producci\xF3n."]
        }), createVNode(_components.p, {
          children: ["No sorprende que, con la abolici\xF3n de la esclavitud y dada la situaci\xF3n de subalternidad de la comunidad negra estadounidense, este tipo de canci\xF3n se trasmitiera a trav\xE9s de las c\xE1rceles \u2014como paralelamente sucediera en el \xE1mbito del flamenco con la instauraci\xF3n del palo de la Carcelera\u2014 y, de manera particular, en las ", createVNode(_components.em, {
            children: "chain gang"
          }), " compuestas por grupos de presos unidos por cadenas y castigados a trabajos forzados en la construcci\xF3n del ferrocarril, carreteras y otras obras p\xFAblicas. De hecho, a partir de la d\xE9cada de 1930, el music\xF3logo y folclorista John Lomax en su labor de preservaci\xF3n de la m\xFAsica popular grabar\xEDa una buena parte de sus registros sonoros, de entre este ", createVNode(_components.em, {
            children: "corpus"
          }), " de cantos de esclavitud, en penitenciar\xEDas."]
        }), createVNode(_components.p, {
          children: ["Es de sobra conocido que las ", createVNode(_components.em, {
            children: "work songs"
          }), " y, de modo m\xE1s espec\xEDfico, los cantos de esclavitud estar\xEDan en la ra\xEDz del ", createVNode(_components.em, {
            children: "blues"
          }), ", que aparecer\xEDa a comienzos del siglo XX en el delta del Misisipi y m\xE1s concretamente, como no pod\xEDa ser de otro modo, en las plantaciones de algod\xF3n donde la poblaci\xF3n afroamericana, aunque emancipada de su condici\xF3n de esclava, era explotada por los grandes propietarios blancos del sur, delineando una situaci\xF3n donde se perpetuaban los nefastos efectos del esclavismo. Al igual que sus ancestros cantaban su pesar y queja frente al extractivismo al que eran sometidos. Eso s\xED, como aqu\xE9llos, de un modo codificado debido al riesgo que supon\xEDa enfrentarse directamente con patr\xF3n blanco que, ", createVNode(_components.em, {
            children: "de facto"
          }), ", manten\xEDa intactas sus prerrogativas sobre la vida de los ahora empleados, estableci\xE9ndose una continuidad con el r\xE9gimen esclavista. As\xED, si se refer\xEDan en una canci\xF3n a los maltratos de una mujer estaban aludiendo de manera cifrada a sus jefes. Es, en definitiva, esta atm\xF3sfera de penurias, abuso, desigualdad, racismo sist\xE9mico y subjetivo, vinculada especialmente al marco del trabajo, donde se originar\xE1 el ", createVNode(_components.em, {
            children: "blues"
          }), " y \xE9ste constituye la ra\xEDz de dos de las canciones de las que trataremos en este texto: ", createVNode(_components.em, {
            children: "Big Boss Man"
          }), " y ", createVNode(_components.em, {
            children: "La canci\xF3n del trabajo"
          }), " (", createVNode(_components.em, {
            children: "Work Song"
          }), ")."]
        }), createVNode(_components.p, {
          children: ["Ambas piezas, en sus versiones originales, invocan el r\xE9gimen de explotaci\xF3n en el trabajo al que est\xE1n sometidas las clases subalternas y, en este caso, la comunidad afroamericana. Como se ha se\xF1alado, su v\xEDnculo con los cantos de esclavitud resulta geneal\xF3gicamente evidente. En el caso de la primera, debido a su filiaci\xF3n con el ", createVNode(_components.em, {
            children: "blues"
          }), ", y la segunda, por tratarse de un est\xE1ndar de ", createVNode(_components.em, {
            children: "jazz"
          }), ", situado, por tanto, en un estilo musical que deviene del primero y ambos son derivaciones de la m\xFAsica que se desarroll\xF3 en las plantaciones del sur de Estados Unidos. Entre dichas canciones existe, sin embargo, una n\xEDtida diferencia en t\xE9rminos de la posici\xF3n que adopta quien enuncia frente a una situaci\xF3n de injusticia en el trabajo. Mientras que la letra de ", createVNode(_components.em, {
            children: "Big Boss Man"
          }), " manifiesta una actitud de queja ante la explotaci\xF3n y busca en el propio sistema de relaciones de poder instituido una salida m\xE1s tolerable, ", createVNode(_components.em, {
            children: "Work Song"
          }), " se sumerge en sus causas, marcadas por la violencia institucional y la desigualdad. Lo que, sin embargo, comparten, m\xE1s all\xE1 de su inserci\xF3n en la misma tradici\xF3n musical, es el hecho de haber sido sometidas a un an\xE1logo fen\xF3meno de asimilaci\xF3n, o incluso recuperaci\xF3n, de las expresiones de resistencia y malestar por parte de la estructura que condena a multitudes a una condici\xF3n de inferioridad. Este proceso puede entenderse de modos distintos, en cada uno de los casos, lo que constituir\xE1 el n\xFAcleo de los argumentos que se desplegar\xE1n a continuaci\xF3n en el an\xE1lisis de las dos canciones."]
        }), createVNode(_components.p, {
          children: ["Composici\xF3n atribuida al productor y cantante afroamericano Luther Dixon y a Al Smith, ", createVNode(_components.em, {
            children: "Big Boss Man"
          }), " fue grabada por el m\xFAsico de blues Jimmy Reed en 1961. En su letra se expresan las condiciones extremas de trabajo al que le somete un jefe y la desafecci\xF3n hacia esa figura de autoridad debido a su conducta, tal como puede inferirse del siguiente fragmento:"]
        }), createVNode(_components.p, {
          children: ["Big boss man, can\u2019t you hear me when I call? Can\u2019t you hear me when I call?", createVNode(_components.br, {}), "\nI said you ain\u2019t so big, you\u2019re just tall that\u2019s all.", createVNode(_components.sup, {
            children: createVNode(_components.a, {
              href: "#user-content-fn-1",
              id: "user-content-fnref-1",
              "data-footnote-ref": "",
              "aria-describedby": "footnote-label",
              children: "1"
            })
          })]
        }), createVNode(_components.p, {
          children: "Sin embargo, el tipo de desidentificaci\xF3n que se produce, en este caso, no es sist\xE9mica en relaci\xF3n con una estructura racista y de clase sino, m\xE1s bien, subjetiva frente un mal jefe. En definitiva, no cuestiona el modelo de producci\xF3n extractivista de las fuerzas vitales de una gran parte de la sociedad explotada. El problema aqu\xED, por tanto, queda reducido a que la perversidad se asocia a los individuos y no al modo en el que est\xE1 configurado un capitalismo que, en su asignaci\xF3n de roles concretos, produce con enorme violencia unas desigualdades en funci\xF3n de diversos vectores que definen la subalternidad. De este modo, el conflicto podr\xEDa resolverse, seg\xFAn se sugiere en esta canci\xF3n, con un cambio de qui\xE9n ocupe la figura de autoridad dentro de un marco de explotaci\xF3n igualmente jer\xE1rquico. Esta soluci\xF3n suavizar\xEDa las formas de explotaci\xF3n sin afrontar sus causas profundas:"
        }), createVNode(_components.p, {
          children: ["I\u2019m gonna get me a boss man", createVNode(_components.br, {}), "\nOne that\u2019s gonna treat me right.", createVNode(_components.sup, {
            children: createVNode(_components.a, {
              href: "#user-content-fn-2",
              id: "user-content-fnref-2",
              "data-footnote-ref": "",
              "aria-describedby": "footnote-label",
              children: "2"
            })
          })]
        }), createVNode(_components.p, {
          children: ["No sorprende que, teniendo en cuenta el contenido aceptable de la letra para una buena parte de la sociedad blanca especialmente en lo relativo a su sector juvenil, fuera Elvis Presley quien, en 1967, grab\xF3 esta canci\xF3n, populariz\xE1ndola de un modo sin precedentes. Son suficientemente conocidas, en este sentido, las acusaciones de apropiaci\xF3n cultural que se han vertido sobre la producci\xF3n musical del \u201CRey del ", createVNode(_components.em, {
            children: "rock \u2018n\u2019 roll"
          }), "\u201D. El extractivismo al que someti\xF3, en su carrera y dentro de un conglomerado industrial, a la m\xFAsica afroamericana es un asunto ampliamente referenciado. As\xED, Little Richard y Maceo Parker cantaban en 1990, dentro del tema ", createVNode(_components.em, {
            children: "Elvis Is Dead"
          }), " compuesto por Vernon Reid:"]
        }), createVNode(_components.p, {
          children: ["Elvis was a hero to most", createVNode(_components.br, {}), "\nBut that\u2019s beside the point", createVNode(_components.br, {}), "\nA Black man taught him how to sing", createVNode(_components.br, {}), "\nAnd then he was crowned King.", createVNode(_components.sup, {
            children: createVNode(_components.a, {
              href: "#user-content-fn-3",
              id: "user-content-fnref-3",
              "data-footnote-ref": "",
              "aria-describedby": "footnote-label",
              children: "3"
            })
          })]
        }), createVNode(_components.p, {
          children: ["Lo que sucedi\xF3 con esta canci\xF3n, como con tantas otras, fue que, por inane que fuera para el sistema de explotaci\xF3n blanco-patriarcal, una expresi\xF3n de malestar propia de la comunidad negra estadounidense, cuyas ra\xEDces se hund\xEDan en la m\xFAsica de resistencia frente a la esclavitud, termin\xF3 por convertirse en un material expropiado y explotado por una industria que manten\xEDa en su configuraci\xF3n los privilegios de los grupos dominantes bajo un aspecto de dise\xF1ada rebeld\xEDa. La versi\xF3n que a\xF1os m\xE1s tarde, en un disco homenaje a Elvis titulado de ", createVNode(_components.em, {
            children: "Tributo al Rey"
          }), ", realiz\xF3 en 1997 Carlos Segarra (fundador del grupo rockabilly Los Rebeldes) sugerir\xE1 un tono m\xE1s amenazante contra la figura simb\xF3lica de poder en el contexto del trabajo. ", createVNode(_components.em, {
            children: "Big Boss Man"
          }), " ser\xE1 traducida aqu\xED como ", createVNode(_components.em, {
            children: "Mandam\xE1s"
          }), " y que tambi\xE9n dar\xE1 t\xEDtulo a la canci\xF3n. Esto se produce ya en un contexto donde el sistema de explotaci\xF3n se ha transformado, conform\xE1ndose un paisaje m\xE1s difuso. El modelo macho-confrontativo, dentro del cual se recupera esta canci\xF3n, de enfrentamiento al fen\xF3meno de las relaciones de trabajo no deja de resultar, en este caso, del todo anacr\xF3nica y, por tanto, inofensiva para unos mecanismos que han devenido m\xE1s sofisticados, aunque igualmente lesivos. Esta variante es la que se incorpora en el proyecto del colectivo Democracia, en una adaptaci\xF3n libre cuyo inter\xE9s radica en la incorporaci\xF3n de la experiencia personal del interprete."]
        }), createVNode(_components.p, {
          children: ["En cuanto a la segunda de las canciones cuyo an\xE1lisis se propone en el presente texto, ", createVNode(_components.em, {
            children: "Work Song"
          }), " se puede afirmar que se produjo, asimismo, un proceso de recuperaci\xF3n, pero en este caso implicando un mecanismo de traducci\xF3n cultural, al ser adaptada al contexto del Estado espa\xF1ol franquista. Esta canci\xF3n apareci\xF3 por primera vez, en su versi\xF3n instrumental, en 1960 y fue compuesta y ejecutada por el cornetista de ", createVNode(_components.em, {
            children: "jazz"
          }), " Nat Adderley. La pieza se inspiraba en un recuerdo de infancia del m\xFAsico, quien rememora el encuentro, frente a su casa de Florida, con una cadena de presidiarios que cantaban mientras realizaban trabajos forzados de pavimentaci\xF3n. Esta circunstancia inscribe, de modo inequ\xEDvoco, la pieza en la tradici\xF3n de los cantos de las ", createVNode(_components.em, {
            children: "chain gang"
          }), ". Ese esp\xEDritu fue recogido por el tambi\xE9n afroamericano Oscar Brown Jr. Compositor, poeta, cantante, actor, dramaturgo y activista por los derechos civiles, Brown escribi\xF3 la letra e interpret\xF3 ", createVNode(_components.em, {
            children: "Work Song"
          }), " el mismo a\xF1o que Adderley lanz\xF3 su primera versi\xF3n y, desde entonces, alcanz\xF3 una gran repercusi\xF3n, siendo grabada por Nina Simone un a\xF1o m\xE1s tarde. A diferencia del contenido de ", createVNode(_components.em, {
            children: "Big Boss Man"
          }), ", la letra de la canci\xF3n alud\xEDa directamente a la violencia sist\xE9mica y estructura de explotaci\xF3n a la que estaba sometida la poblaci\xF3n negra estadounidense, como puede apreciarse en la siguiente estrofa:"]
        }), createVNode(_components.p, {
          children: ["I commited crime Lord I needed", createVNode(_components.br, {}), "\nCrime of being hungry and poor", createVNode(_components.br, {}), "\nI left the grocery store man bleeding (breathing?)", createVNode(_components.br, {}), "\nWhen they caught me robbing his store.", createVNode(_components.sup, {
            children: createVNode(_components.a, {
              href: "#user-content-fn-4",
              id: "user-content-fnref-4",
              "data-footnote-ref": "",
              "aria-describedby": "footnote-label",
              children: "4"
            })
          })]
        }), createVNode(_components.p, {
          children: ["Condenados a la delincuencia y a sus consecuencias judiciales y penitenciarias. Tal es la condici\xF3n de la que nos habla ", createVNode(_components.em, {
            children: "Work Song"
          }), ". La de aquellas comunidades expulsadas a los m\xE1rgenes sociales en virtud de unos mecanismos de subalternidad que nos remite a los terribles resultados de la agenda de racializaci\xF3n. Sin negociar con el ", createVNode(_components.em, {
            children: "statu quo"
          }), ", esta canci\xF3n se se manifiesta como un an\xE1lisis del mismo con la intenci\xF3n de transformar ese estado de cosas."]
        }), createVNode(_components.p, {
          children: "El asunto que aqu\xED nos ocupa, sin embargo, se vincula al modo en el que esta canci\xF3n fue apropiada, en el contexto del franquismo, y como su sentido se pudo alterar desde un espacio inicialmente reivindicativo \u2014recordemos la filiaci\xF3n activista del autor de la letra\u2014 al m\xE1s afirmativo en lo relativo a las nociones de trabajo situadas, evidentemente, en cada contexto social concreto. Sea como fuere, resulta de gran inter\xE9s el proceso de recuperaci\xF3n de esta pieza musical desde su contexto original estadounidense, atravesado por la guerra cultural protagonizada por los movimientos por los derechos civiles, hasta el del desarrollismo franquista, en el que la cultura jugar\xE1 un rol destacado en ciertas transformaciones sociales espoleadas por gobiernos tecnocr\xE1ticos y, de modo particular, en el intento del r\xE9gimen de homologaci\xF3n internacional con los est\xE1ndares democr\xE1ticos occidentales."
        }), createVNode(_components.p, {
          children: [createVNode(_components.em, {
            children: "La Canci\xF3n del trabajo"
          }), ", como se tradujo esta pieza, fue adaptada instrumentalmente por Manuel Alejandro, que le dar\xEDa un ritmo ", createVNode(_components.em, {
            children: "ska"
          }), ", y fue Manuel Clavero (seud\xF3nimo de Manuel L\xF3pez-Quiroga) tradujo libremente la letra, circunstancia que es especialmente relevante, transformando su sentido para sintonizar con ciertos aspectos culturales que atravesaban el tiempo hist\xF3rico y pol\xEDtico de la \xFAltima etapa franquista. La adaptaci\xF3n se realiz\xF3 en 1966 y, ese mismo a\xF1o, fue grabada por Raphael. Que fuera, precisamente, este cantante el que interpretara la pieza result\xF3 de lo m\xE1s conveniente para la operaci\xF3n modificadora de sentido respecto de la original. Esta elecci\xF3n no parece casual, teniendo en cuenta que Raphael conect\xF3 con las aspiraciones de modernizaci\xF3n y blanqueamiento de la imagen de la fase final del franquismo. Su posicionamiento, aparentemente apol\xEDtico, unido a una performatividad ambigua en relaci\xF3n con la heteronorma, pero siempre dispuesto a colaborar tanto con el r\xE9gimen como con otras dictaduras del contexto latinoamericano, hicieron de \xE9l un agente de propagaci\xF3n de un nuevo imaginario en relaci\xF3n con la modernizaci\xF3n de costumbres, la expansi\xF3n del consumo y el cambio en la \xE9tica del trabajo."]
        }), createVNode(_components.p, {
          children: [createVNode(_components.em, {
            children: "La Canci\xF3n del trabajo"
          }), " supone un fen\xF3meno cultural paradigm\xE1tico del referido giro que se situar\xEDa entre un sistema y otro de valores, especialmente en lo asociado a la consideraci\xF3n del trabajo. Cuando se examina su letra adaptada al castellano podemos observar el descrito tr\xE1nsito desde el espacio nacionalcat\xF3lico al tecnocr\xE1tico, con sus respectivos modos de abordar una noci\xF3n, lo laboral, que en esos momentos se hallaba en un proceso de mutaci\xF3n. En su primera estrofa puede apreciarse c\xF3mo se despliega la moral tradicional del catolicismo asociada a este concepto y que proveniente de la idea del trabajo como maldici\xF3n b\xEDblica ocasionada por el pecado original. Su inevitabilidad, por mandato divino, nos sit\xFAa en el territorio de la resignaci\xF3n. Nada se puede hacer salvo aceptar una pena que no puede ser cuestionada en absoluto. La canci\xF3n, en definitiva, incita a mantener y reproducir, asumiendo nuestra culpa, las relaciones de poder que definen dicho espacio de actividad como parte de nuestra constituci\xF3n humana naturalizada, obedeciendo acr\xEDticamente unas presuntas leyes inmutables. Es, en este sentido, en el que interpretamos aqu\xED los versos iniciales:"]
        }), createVNode(_components.p, {
          children: ["Arrastrar la dura cadena", createVNode(_components.br, {}), "\nTrabajar sin tregua y sin fin", createVNode(_components.br, {}), "\nEs lo mismo que una condena", createVNode(_components.br, {}), "\nQue ninguno puede eludir", createVNode(_components.br, {}), "\nEl trabajo nace con la persona", createVNode(_components.br, {}), "\nVa grabado sobre su piel, y ya siempre", createVNode(_components.br, {}), "\nLe acompa\xF1a", createVNode(_components.br, {}), "\nComo el amigo m\xE1s fiel."]
        }), createVNode(_components.p, {
          children: ["Este mensaje de sacrificio, sin embargo, dif\xEDcilmente podr\xEDa sintonizar con las expectativas de una juventud, la de los a\xF1os sesenta del pasado siglo, atravesada por el anhelo de libertad y transformaci\xF3n frente a las precarias y asfixiantes condiciones vitales a las que se hab\xEDan visto sometidos sus mayores en la etapa aut\xE1rquica del r\xE9gimen franquista. Enunciada la imposibilidad de eludir el castigo que supone el trabajo, y de ah\xED que esta pieza suponga un punto de inflexi\xF3n en la consideraci\xF3n de este concepto, propone un escenario en el que transmutar sus valores constitutivos y que, en contraste con las posibilidades de cambio pol\xEDtico m\xE1s profundo, se interna en la atm\xF3sfera del deseo del consumo individualista que se conciliaba con el ", createVNode(_components.em, {
            children: "ethos"
          }), " predominante en el contexto occidental. Toda vez que hay que conformarse con esa imposici\xF3n que supone la obligaci\xF3n del trabajo, el modo en el que se pod\xEDa asegurar la avenencia era la de inocular una visi\xF3n positiva en t\xE9rminos de progreso y autorrealizaci\xF3n a trav\xE9s de un desempe\xF1o laboral que, adem\xE1s de ser plenamente conveniente como mecanismo de control social, conectaba perfectamente con las demandas del capitalismo internacional:"]
        }), createVNode(_components.p, {
          children: ["Vale m\xE1s tener confianza", createVNode(_components.br, {}), "\nY luchar por algo mejor", createVNode(_components.br, {}), "\nTrabajar con fe y esperanza", createVNode(_components.br, {}), "\nPor lograr un mundo de amor."]
        }), createVNode(_components.p, {
          children: ["La apelaci\xF3n a una cierta libertad individual, aun cuando se habitara en un r\xE9gimen dictatorial, basada en la mejora de la posici\xF3n econ\xF3mica que implicaba, en consecuencia, una ampliaci\xF3n de la capacidad de consumo, vincular\xEDa ", createVNode(_components.em, {
            children: "La Canci\xF3n del trabajo"
          }), " con el esp\xEDritu liberal del emprendimiento que, en la fase del desarrollismo econ\xF3mico franquista, comenzaba a manifestarse como valor social en alza. Estos argumentos se relacionan directamente con el cambio que se estaba produciendo, por aquel entonces, en el interior del r\xE9gimen y que intentaba garantizar la continuidad del mismo. En su proceso de homologaci\xF3n internacional, la apariencia de un aperturismo y la articulaci\xF3n de se\xF1ales de liberalizaci\xF3n a trav\xE9s de las manifestaciones art\xEDsticas, articulan un mecanismo de propaganda bien estudiado y que podemos tanto inferir de la pol\xEDtica cultural franquista en el exterior, con la promoci\xF3n del informalismo y su expresi\xF3n del \u201Cgenio\u201D individual, como de esta nueva disposici\xF3n social hacia el trabajo y el consumo. Todo ello manifestaciones de cierta idea de libertad que, por otro lado, se adecuar\xEDan a los par\xE1metros de las democracias occidentales. La disposici\xF3n de un nuevo imaginario del trabajo, a la que contribuir\xEDa esta canci\xF3n, tendr\xEDa el objetivo de establecer una nueva conformidad social que, al menos en apariencia, colocaba el r\xE9gimen en un espacio de mayor aceptaci\xF3n internacional y, lo que es m\xE1s importante, respond\xEDa a la definici\xF3n de unas condiciones que facilitaban la expansi\xF3n econ\xF3mica dise\xF1ada por un sistema que, ya en la mencionada d\xE9cada, era claramente de corte tecnocr\xE1tico."]
        }), createVNode(_components.p, {
          children: ["En la versi\xF3n en castellano de ", createVNode(_components.em, {
            children: "Work Song"
          }), " quedaban lejos esos cantos de esclavos y la m\xFAsica epigonal de las ", createVNode(_components.em, {
            children: "chain gang"
          }), ", con su potencia cuestionadora y de resistencia ante la violencia ejercida a trav\xE9s del trabajo. El proceso que implicar\xEDa su traducci\xF3n al contexto franquista estar\xEDa marcado por una recuperaci\xF3n, para los intereses dominantes, de las expresiones culturales de malestar de las comunidades oprimidas. Tanto en esta canci\xF3n como en el devenir de ", createVNode(_components.em, {
            children: "Big Boss Man"
          }), " encontramos un mismo mecanismo, aunque de modos distintos. El proyecto del colectivo Democracia, que incluye ambas piezas, nos interroga sobre las condiciones necesarias para hacer \xFAtil de nuevo, para quienes desde la subalternidad expresan su disconformidad, esas herramientas musicales. Desde la posibilidad de encarnarlas con versiones que respondan a su situaci\xF3n actual, pasando por la consideraci\xF3n del contexto de difusi\xF3n de las mismas hasta el modo de performatividad mediante la que se interpretan. Todas estas cuestiones, y de seguro algunas otras, ser\xE1n fundamentales en la consideraci\xF3n de dicha potencialidad."]
        }), createVNode(_components.h2, {
          id: "coda-en-torno-a-las-canciones-de-resistencia-abolici\xF3n-del-trabajo",
          children: "Coda en torno a las canciones de resistencia-abolici\xF3n del trabajo"
        }), createVNode(_components.p, {
          children: ["Adem\xE1s de las dos piezas musicales, analizadas anteriormente, en relaci\xF3n con la resistencia y denuncia de las condiciones de trabajo, el presente proyecto del colectivo Democracia incluye otras canciones que abordan una diversa tem\xE1tica socio-pol\xEDtica. En este contexto, y directamente relacionadas con las canciones de trabajo, se encuentran las expresiones que expl\xEDcitamente rechazan esta actividad y que critican la productividad como un modo de violencia y control hacia la poblaci\xF3n. Ese es el caso de las dos que han sido seleccionadas en este \xE1mbito: ", createVNode(_components.em, {
            children: "Esclavos del siglo XXI"
          }), " del grupo punk Gatillazo (fundado por el cantante de La polla, Evaristo) grabado en 2013 y ", createVNode(_components.em, {
            children: "Reacci\xF3n en cadena"
          }), " de la formaci\xF3n de rock progresivo Dif\xEDcil Equilibrio y que vio la luz ese mismo a\xF1o."]
        }), createVNode(_components.p, {
          children: ["Primeramente, y antes de entrar en consideraciones en relaci\xF3n con las citadas canciones, habr\xEDa que plantear el contexto en el que surgen. Nos referimos aqu\xED a cierta tradici\xF3n de rechazo del trabajo en el \xE1mbito occidental. A su consideraci\xF3n negativa se opondr\xE1 la reforma protestante, que en alianza con el desarrollo del capitalismo, instaurar\xE1 un cierto prestigio que servir\xE1 para apuntalar la expansi\xF3n de este sistema de producci\xF3n y que continuar\xE1 con las tesis productivistas del marxismo cl\xE1sico. Sin embargo, desde espacios m\xE1s heterodoxos de este mismo marco ideol\xF3gico se producir\xE1 una reacci\xF3n en contra del modelo social basado en el trabajo, como puede encontrarse en la c\xE9lebre obra de Paul Lafargue publicada, en 1883, bajo el t\xEDtulo de ", createVNode(_components.em, {
            children: "El derecho a la pereza"
          }), ". En este texto se propon\xEDa la abolici\xF3n del trabajo o, si \xE9sta no era posible, al menos una reducci\xF3n de la jornada laboral a tres horas para liberar a la humanidad de la esclavitud laboral. Se trataba de invertir los valores de la \xE9tica protestante del trabajo, calificando la holgazaner\xEDa y el goce como virtudes, y la productividad como una actividad degradante y viciosa. Del \u201CJamais je ne travaillerai\u201D", createVNode(_components.sup, {
            children: createVNode(_components.a, {
              href: "#user-content-fn-5",
              id: "user-content-fnref-5",
              "data-footnote-ref": "",
              "aria-describedby": "footnote-label",
              children: "5"
            })
          }), " proclamado, diez a\xF1os antes de la aparici\xF3n del libro de Lafargue, por Arthur Rimbaud, hasta el \u201CNe travaillez jamais\u201D", createVNode(_components.sup, {
            children: createVNode(_components.a, {
              href: "#user-content-fn-6",
              id: "user-content-fnref-6",
              "data-footnote-ref": "",
              "aria-describedby": "footnote-label",
              children: "6"
            })
          }), " escrito en un muro parisino por Guy Debord en 1953, distan setenta a\xF1os, per\xEDodo en el que desde determinadas corrientes marxistas y anarquistas se extender\xE1 un rechazo hacia el trabajo en su vertiente asalariada propia del capitalismo."]
        }), createVNode(_components.p, {
          children: ["M\xE1s cercano en el tiempo el Grupo Krisis insistir\xEDa, en 1999, en su ", createVNode(_components.em, {
            children: "Manifiesto contra el trabajo"
          }), ", en el desmantelamiento del mismo mediante la apropiaci\xF3n de los medios de producci\xF3n para terminar, de ese modo, con una maquinaria de control, coercitiva y de explotaci\xF3n de las fuerzas vitales de los individuos. Se incardinaba, de este modo, en una genealog\xEDa de rechazo del trabajo en tanto forma de dominio, aunque como se\xF1alaron algunas voces cr\xEDticas, por ejemplo Jorge Sempr\xFAn en ", createVNode(_components.em, {
            children: "El fantasma de la teor\xEDa. Notas sobre el Manifiesto contra el Trabajo"
          }), " (1997), podr\xEDa resultar ingenuo entender que pueden recuperarse intactas las t\xE9cnicas y tecnolog\xEDas, despoj\xE1ndolas de su forma capitalista. Sea como fuere, y de este \xFAltimo asunto se ha debatido extensamente en las \xFAltimas d\xE9cadas, lo que podemos afirmar es que la idea de trabajo se ha ido transformando de manera dram\xE1tica en los \xFAltimos a\xF1os y que, incluso desde perspectivas neoliberales, han ido apareciendo reflexiones que tratan de dilucidar el incierto futuro de dicha noci\xF3n, como la de Jeremy Rifkin en ", createVNode(_components.em, {
            children: "El fin del trabajo"
          }), " (1995). Desde entonces, la emergencia tecnol\xF3gica ha trastocado las relaciones laborales y las condiciones de producci\xF3n. Con la consecuente precarizaci\xF3n y autoexplotaci\xF3n derivadas de estas din\xE1micas, las exhortaciones cl\xE1sicas contra el trabajo, aun resultando leg\xEDtimas, adolecen de cierta insuficiencia para enfrentarse a un mundo mucho m\xE1s complejo. Por otra parte, como sucede con muchas otras perspectivas cr\xEDticas provenientes del mundo occidental, habr\xEDa que se\xF1alar que esta genealog\xEDa no logra interpelar a muchos de los colectivos subalternos como los constituidos por migrantes racializad+s cuya situaci\xF3n les ubica en problem\xE1ticas de otro orden."]
        }), createVNode(_components.p, {
          children: ["Volviendo a los temas citados en este apartado, ", createVNode(_components.em, {
            children: "Esclavos del siglo XXI"
          }), " alude a la alienaci\xF3n de la vida que propone el trabajo asalariado y que, bajo un simulacro de vida libre, solo ofrece una nueva forma de esclavitud, estableciendo, de esta manera, un v\xEDnculo con los planteamientos que, desde finales del siglo XIX apuntados con anterioridad, se han propuesto acabar con el trabajo como sistema de control y disciplina social. En el caso de la segunda canci\xF3n, ", createVNode(_components.em, {
            children: "Reacci\xF3n en cadena"
          }), " establece, por su parte, una secuencia l\xF3gica de conceptos que definen una serie de asociaciones que vinculan el trabajo con las ideas de obediencia, productividad, expolio, control y, despu\xE9s de establecer numerosos pares de nociones, con una cierta forma de libertad de estirpe capitalista neoliberal conectada a la frase nacionalsocialista, que presid\xEDa los campos de exterminio, \u201CEl trabajo os har\xE1 libre\u201D (", createVNode(_components.em, {
            children: "Arbeit macht"
          }), " ", createVNode(_components.em, {
            children: "frei"
          }), "). Se plantea, de este modo, la continuidad del control totalitario en las sociedades demoliberales a partir de una consigna que se emplea como estribillo."]
        }), " ", createVNode($$ImageCaption, {
          mobileImgUrl: imageArbeitMobile,
          desktopImgUrl: imageArbeitDesktop,
          caption: "Pie de foto",
          alt: "Portada disco Elvis. Big Boss Man"
        }), createVNode(_components.p, {
          children: "M\xE1s all\xE1 de vivir situados en un contexto complejo en lo relativo a una idea de trabajo en transformaci\xF3n o disoluci\xF3n, recuperar a d\xEDa de hoy estas manifestaciones musicales, con el arrastre geneal\xF3gico que suponen en t\xE9rminos ideol\xF3gicos, puede ser \xFAtil. Siempre y cuando, como se sostuvo en la primera parte de este texto, seamos capaces de hacer que, mediante una reflexi\xF3n y generaci\xF3n de las condiciones en las que \xE9stas se producen y se distribuyen, interpelen a quienes, actualmente, contin\xFAan en un r\xE9gimen de explotaci\xF3n de sus fuerzas vitales, sea cual sea la definici\xF3n que podamos dar a una noci\xF3n tan problem\xE1tica como es la de trabajo en nuestra \xE9poca."
        })]
      })
    }), "\n", "\n", createVNode(_components.section, {
      "data-footnotes": "",
      class: "footnotes",
      children: [createVNode(_components.h2, {
        class: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", createVNode(_components.p, {
            children: "\u201CGran jefe, \xBFno me oyes cuando te llamo? \xBFNo me oyes cuando te llamo?"
          }), "\n", createVNode(_components.p, {
            children: ["Dije que no eres tan grande, solo eres alto eso es todo\u201D. ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-2",
          children: ["\n", createVNode(_components.p, {
            children: "\u201CVoy a conseguir un jefe"
          }), "\n", createVNode(_components.p, {
            children: ["Uno que me trate bien\u201D. ", createVNode(_components.a, {
              href: "#user-content-fnref-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-3",
          children: ["\n", createVNode(_components.p, {
            children: "\u201CElvis era un h\xE9roe para la mayor\xEDa"
          }), "\n", createVNode(_components.p, {
            children: "Pero eso no viene al caso"
          }), "\n", createVNode(_components.p, {
            children: "Un negro le ense\xF1\xF3 a cantar"
          }), "\n", createVNode(_components.p, {
            children: ["Y luego fue coronado rey\u201D. ", createVNode(_components.a, {
              href: "#user-content-fnref-3",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-4",
          children: ["\n", createVNode(_components.p, {
            children: "\u201CComet\xED el crimen Se\xF1or que necesitaba"
          }), "\n", createVNode(_components.p, {
            children: "Crimen de estar hambriento y ser pobre"
          }), "\n", createVNode(_components.p, {
            children: "Dej\xE9 al hombre de la tienda sangrando (\xBFrespirando?)"
          }), "\n", createVNode(_components.p, {
            children: ["Cuando me atraparon robando su tienda\u201D. ", createVNode(_components.a, {
              href: "#user-content-fnref-4",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 4",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-5",
          children: ["\n", createVNode(_components.p, {
            children: ["\u201CJam\xE1s trabajar\xE9\u2026\u201D. Esta frase proviene de del poema ", createVNode(_components.em, {
              children: "Virgen Loca"
            }), " incluido en ", createVNode(_components.em, {
              children: "Una temporada en el infierno"
            }), " (1873). ", createVNode(_components.a, {
              href: "#user-content-fnref-5",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 5",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-6",
          children: ["\n", createVNode(_components.p, {
            children: ["\u201CNunca trabajes\u201D. ", createVNode(_components.a, {
              href: "#user-content-fnref-6",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 6",
              class: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
const url = "/textos/canciones-de-trabajo";
const file = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/canciones-de-trabajo.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aitor/Documents/Sites/lqon/src/pages/textos/canciones-de-trabajo.mdx";

const cancionesDeTrabajo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ImageCaption as $, cancionesDeTrabajo as c };
