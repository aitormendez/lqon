import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_WNMqFcZZ.mjs';

const _page0  = () => import('./chunks/generic_-UAj75uw.mjs');
const _page1  = () => import('./chunks/index_X33CJSP2.mjs');
const _page2  = () => import('./chunks/directorio_7CuGVP3N.mjs');
const _page3  = () => import('./chunks/juan-carlos-gorreta__d9AgeQ9.mjs');
const _page4  = () => import('./chunks/lucia-montenegro_3YFGwRLS.mjs');
const _page5  = () => import('./chunks/vorja-encikutao_ogbRhKH2.mjs');
const _page6  = () => import('./chunks/briana-weapons_aS-sNRwx.mjs');
const _page7  = () => import('./chunks/oscar-cabanas_duzym8ho.mjs');
const _page8  = () => import('./chunks/grupo-chasky_-3xGua70.mjs');
const _page9  = () => import('./chunks/nono-murcia_2yrO8qST.mjs');
const _page10  = () => import('./chunks/el-chirly_Sw2pDxNS.mjs');
const _page11  = () => import('./chunks/taktel_LJeOtNow.mjs');
const _page12  = () => import('./chunks/vicius_OXQQsnF0.mjs');
const _page13  = () => import('./chunks/una-deriva-psicogeografica-por-el-metro-de-madrid_fL7JUXFg.mjs');
const _page14  = () => import('./chunks/la-muerte-declara-la-guerra-a-los-gendarmes_DLMgKz24.mjs');
const _page15  = () => import('./chunks/migracion-y-resistencia-indigena_vtCM8Yru.mjs');
const _page16  = () => import('./chunks/que-no-es-la-psicogeografia_mJHXj1FH.mjs');
const _page17  = () => import('./chunks/canciones-de-trabajo_o331TinN.mjs');
const _page18  = () => import('./chunks/casas-de-carton_7-H12LnB.mjs');
const _page19  = () => import('./chunks/la-comunidad_gIzkT1BB.mjs');
const _page20  = () => import('./chunks/presentacion_ljdhR3LG.mjs');
const _page21  = () => import('./chunks/resonancias_kS7cUg87.mjs');
const _page22  = () => import('./chunks/post-logo_z3PUdHr9.mjs');
const _page23  = () => import('./chunks/folclore_BxQPQOwS.mjs');
const _page24  = () => import('./chunks/juglaria_D2NAjOkw.mjs');
const _page25  = () => import('./chunks/no-lugar_oANU_ia9.mjs');
const _page26  = () => import('./chunks/punk_6niyYjmz.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/directorio.astro", _page2],["src/pages/acciones/juan-carlos-gorreta.mdx", _page3],["src/pages/acciones/lucia-montenegro.mdx", _page4],["src/pages/acciones/vorja-encikutao.mdx", _page5],["src/pages/acciones/briana-weapons.mdx", _page6],["src/pages/acciones/oscar-cabanas.mdx", _page7],["src/pages/acciones/grupo-chasky.mdx", _page8],["src/pages/acciones/nono-murcia.mdx", _page9],["src/pages/acciones/el-chirly.mdx", _page10],["src/pages/acciones/taktel.mdx", _page11],["src/pages/acciones/vicius.mdx", _page12],["src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx", _page13],["src/pages/textos/la-muerte-declara-la-guerra-a-los-gendarmes.mdx", _page14],["src/pages/textos/migracion-y-resistencia-indigena.mdx", _page15],["src/pages/textos/que-no-es-la-psicogeografia.mdx", _page16],["src/pages/textos/canciones-de-trabajo.mdx", _page17],["src/pages/textos/casas-de-carton.mdx", _page18],["src/pages/textos/la-comunidad.mdx", _page19],["src/pages/textos/presentacion.mdx", _page20],["src/pages/textos/resonancias.mdx", _page21],["src/pages/textos/post-logo.mdx", _page22],["src/pages/textos/folclore.mdx", _page23],["src/pages/textos/juglaria.mdx", _page24],["src/pages/textos/no-lugar.mdx", _page25],["src/pages/textos/punk.mdx", _page26]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
