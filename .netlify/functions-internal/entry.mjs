import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_3dDBeTpv.mjs';

const _page0  = () => import('./chunks/generic_NuUiTeYG.mjs');
const _page1  = () => import('./chunks/index_O9DVcB3L.mjs');
const _page2  = () => import('./chunks/directorio_ID98e2iM.mjs');
const _page3  = () => import('./chunks/juan-carlos-gorreta_h45hbeHJ.mjs');
const _page4  = () => import('./chunks/lucia-montenegro_0td4zH4v.mjs');
const _page5  = () => import('./chunks/vorja-encikutao_zizWL0bm.mjs');
const _page6  = () => import('./chunks/briana-weapons_E4kk4cR8.mjs');
const _page7  = () => import('./chunks/oscar-cabanas_303UeRNs.mjs');
const _page8  = () => import('./chunks/grupo-chasky_ECKtrnUM.mjs');
const _page9  = () => import('./chunks/nono-murcia_j35BHxrk.mjs');
const _page10  = () => import('./chunks/el-chirly_DsZ_eWpT.mjs');
const _page11  = () => import('./chunks/taktel_NeVS_OLu.mjs');
const _page12  = () => import('./chunks/vicius_8IOTOWe-.mjs');
const _page13  = () => import('./chunks/una-deriva-psicogeografica-por-el-metro-de-madrid_o_AwXay1.mjs');
const _page14  = () => import('./chunks/la-muerte-declara-la-querra-a-los-gendarmes_jQ3CJ3cV.mjs');
const _page15  = () => import('./chunks/migracion-y-resistencia-indigena_9GwvG5pA.mjs');
const _page16  = () => import('./chunks/que-no-es-la-psicogeografia_2-KrS67J.mjs');
const _page17  = () => import('./chunks/canciones-de-trabajo_HZplHAbg.mjs');
const _page18  = () => import('./chunks/casas-de-carton_R0B1LqKg.mjs');
const _page19  = () => import('./chunks/la-comunidad_HbPFHBd9.mjs');
const _page20  = () => import('./chunks/presentacion_eXrShaBR.mjs');
const _page21  = () => import('./chunks/resonancias_f39I0On0.mjs');
const _page22  = () => import('./chunks/post-logo_234sP1W9.mjs');
const _page23  = () => import('./chunks/folclore_cH-iGACl.mjs');
const _page24  = () => import('./chunks/juglaria_gFpgO3XI.mjs');
const _page25  = () => import('./chunks/no-lugar_3PKzhcD2.mjs');
const _page26  = () => import('./chunks/punk_0eZufpjG.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/directorio.astro", _page2],["src/pages/acciones/juan-carlos-gorreta.mdx", _page3],["src/pages/acciones/lucia-montenegro.mdx", _page4],["src/pages/acciones/vorja-encikutao.mdx", _page5],["src/pages/acciones/briana-weapons.mdx", _page6],["src/pages/acciones/oscar-cabanas.mdx", _page7],["src/pages/acciones/grupo-chasky.mdx", _page8],["src/pages/acciones/nono-murcia.mdx", _page9],["src/pages/acciones/el-chirly.mdx", _page10],["src/pages/acciones/taktel.mdx", _page11],["src/pages/acciones/vicius.mdx", _page12],["src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx", _page13],["src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes.mdx", _page14],["src/pages/textos/migracion-y-resistencia-indigena.mdx", _page15],["src/pages/textos/que-no-es-la-psicogeografia.mdx", _page16],["src/pages/textos/canciones-de-trabajo.mdx", _page17],["src/pages/textos/casas-de-carton.mdx", _page18],["src/pages/textos/la-comunidad.mdx", _page19],["src/pages/textos/presentacion.mdx", _page20],["src/pages/textos/resonancias.mdx", _page21],["src/pages/textos/post-logo.mdx", _page22],["src/pages/textos/folclore.mdx", _page23],["src/pages/textos/juglaria.mdx", _page24],["src/pages/textos/no-lugar.mdx", _page25],["src/pages/textos/punk.mdx", _page26]]);
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
