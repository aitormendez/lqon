/* empty css                                   */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_N4Ixt6P6.mjs';
import 'kleur/colors';
import { $ as $$Image, a as $$Layout } from './briana-weapons_qK5G95lh.mjs';

const tornos = "/_astro/torno-fila-frontal.aY1laav1.mp4";

const ilogoLQON = new Proxy({"src":"/_astro/Logotipo-principal.k1FSnFhG.jpg","width":842,"height":596,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const claseArticle = "w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-2";
  const claseImg = "aspect-video rounded object-cover w-full";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<video id="videoLogotipo" class="w-full" muted playsinline autoplay loop> <source${addAttribute(tornos, "src")} type="video/mp4">
Tu navegador no soporta videos.
</video> <div class="w-full mt-14 flex flex-wrap px-2"> <article${addAttribute(claseArticle, "class")}> <a class="enlace text-3xl" href="textos/presentacion" data-uri="presentacion"><p>Presentación</p></a> <p class="mb-2 text-xl">Democracia</p> ${renderComponent($$result2, "Image", $$Image, { "class": claseImg, "src": ilogoLQON, "alt": "Logotipo Lo quieras o no" })} </article> <!-- <article class={claseArticle}>
      <a
        class="text-3xl"
        href="textos/una-deriva-psicogeografica-por-el-metro-de-madrid"
        ><p>Deriva psicogeográfica 1</p></a
      >
      <p class="mb-2 text-xl">Luis Navarro</p>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/que-no-es-la-psicogeografia"
        ><p>Qué no es la psicogeografía</p></a
      >
      <p class="mb-2 text-xl">Luis Navarro</p>
      <Image class={claseImg} src={imageDeriva1} alt="Plano de Madrid" />
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/oscar-cabanas"><p>Oscar cabanas</p></a>
      <p class="mb-2 text-xl">Mandamás</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          class="rounded"
          src="https://iframe.mediadelivery.net/embed/201842/076c5a77-c9e9-4ad8-ada0-be46e9ff8814?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/no-lugar"
        ><p>Deriva psicogeográfica 2</p></a
      >
      <p class="mb-2 text-xl">Luis Navarro</p>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/vorja-encikutao"
        ><p>Vorja Encikutao</p></a
      >
      <p class="mb-2 text-xl">Mandamás</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          class="rounded"
          src="https://iframe.mediadelivery.net/embed/201842/6836a535-8db4-4771-bc3f-98c741ec2575?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a
        class="text-3xl"
        href="textos/la-muerte-declara-la-guerra-a-los-gendarmes"
        ><p>La muerte declara la guerra a los gendarmes</p></a
      >
      <p class="mb-2 text-xl">Georges Brassens</p>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/la-comunidad"
        ><p>Deriva psicogeográfica 3</p></a
      >
      <p class="mb-2 text-xl">Luis Navarro</p>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/taktel"><p>Taktel</p></a>
      <p class="mb-2 text-xl">Reacción en cadena</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          class="rounded"
          src="https://iframe.mediadelivery.net/embed/201842/5e39e1ec-8345-4d9d-a49f-1f9c34cf07e8?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/canciones-de-trabajo"
        ><p>Canciones de trabajo 3</p></a
      >
      <p class="mb-2 text-xl">Daniel Villegas</p>
      <Image
        class={claseImg}
        src={imageIntervencionMetro}
        alt="Plano de Madrid"
      />
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/juan-carlos-gorreta"
        ><p>Juan Carlos Gorreta</p></a
      >
      <p class="mb-2 text-xl">La vida de los esclavos en el siglo XXI</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          class="rounded"
          src="https://iframe.mediadelivery.net/embed/201842/a91e35af-1322-4e13-b0fd-ad5019c8402a?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/juglaria"
        ><p>Deriva psicogeográfica 4</p></a
      >
      <p class="mb-2 text-xl">Luis Navarro</p>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/vicius"><p>Vicius</p></a>
      <p class="mb-2 text-xl">Vacaciones en España</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          class="rounded"
          src="https://iframe.mediadelivery.net/embed/201842/a91e35af-1322-4e13-b0fd-ad5019c8402a?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/punk"><p>Punk</p></a>
      <p class="mb-2 text-xl">Democracia</p>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/grupo-chasky"><p>Grupo Chasky</p></a>
      <p class="mb-2 text-xl">Movimiento indígena</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          class="rounded"
          src="https://iframe.mediadelivery.net/embed/201842/c244011c-d2da-4ddb-97f2-18f139356f39?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/migracion-y-resistencia-indigena"
        ><p>Resistencias migrantes</p></a
      >
      <p class="mb-2 text-xl">Luis Duno-Gottberg</p>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/nono-murcia"><p>Nono Murcia</p></a>
      <p class="mb-2 text-xl">Fandangos</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          class="rounded"
          src="https://iframe.mediadelivery.net/embed/201842/373a1c84-54a5-4e46-92ec-46ffdfd89674?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/folclore"><p>Folclore</p></a>
      <p class="mb-2 text-xl">Mabel Quiñones</p>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/el-chirly"><p>El Chirly</p></a>
      <p class="mb-2 text-xl">Están cayendo bombas en Madrid</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          src="https://iframe.mediadelivery.net/embed/201842/329c5de8-8479-42fd-80fc-b100a3947564?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/resonancias"
        ><p>Deriva psicogeográfica 5</p></a
      >
      <p class="mb-2 text-xl">Luis Navarro</p>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/briana-weapons"
        ><p>Briana Weapons</p></a
      >
      <p class="mb-2 text-xl">Falta título</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          src="https://iframe.mediadelivery.net/embed/201842/4a644d08-d8f1-4960-829d-0c4bc1fc8023?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="acciones/lucia-montenegro"
        ><p>Lucía Montenegro</p></a
      >
      <p class="mb-2 text-xl">Casas de cartón</p>
      <div style="position:relative;padding-top:56.25%;">
        <iframe
          src="https://iframe.mediadelivery.net/embed/201842/577b0eae-876e-441a-ab9f-830d776e1589?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style="border:0;position:absolute;top:0;height:100%;width:100%;"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowfullscreen="true"></iframe>
      </div>
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/casas-de-carton"
        ><p>Casas de cartón</p></a
      >
      <p class="mb-2 text-xl">Luis Duno-Gottberg</p>
      <Image class={claseImg} src={imageCasas} alt="Logotipo Lo quieras o no" />
    </article>

    <article class={claseArticle}>
      <a class="text-3xl" href="textos/post-logo"><p>Post-logo</p></a>
      <p class="mb-2 text-xl">Luis Navarro</p>
    </article>
  </div> --> </div>  ` })}`;
}, "/Users/aitor/Documents/Sites/lqon/src/pages/index.astro", void 0);

const $$file = "/Users/aitor/Documents/Sites/lqon/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
