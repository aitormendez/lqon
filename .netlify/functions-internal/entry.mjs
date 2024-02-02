import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_RnSlPQsa.mjs';

const _page0  = () => import('./chunks/generic_C_3h1KmO.mjs');
const _page1  = () => import('./chunks/index_ctmFZabp.mjs');
const _page2  = () => import('./chunks/juan-carlos-gorreta_MzCjDYe1.mjs');
const _page3  = () => import('./chunks/lucia-montenegro_p9AM6fo7.mjs');
const _page4  = () => import('./chunks/vorja-encikutao_BdkGjMEU.mjs');
const _page5  = () => import('./chunks/briana-weapons_PESqwfPZ.mjs');
const _page6  = () => import('./chunks/oscar-cabanas_6MT0Knsq.mjs');
const _page7  = () => import('./chunks/grupo-chasky_HKtRhI9L.mjs');
const _page8  = () => import('./chunks/nono-murcia_K83hI33-.mjs');
const _page9  = () => import('./chunks/el-chirly_L_i1GEx3.mjs');
const _page10  = () => import('./chunks/taktel_aMZGyhzc.mjs');
const _page11  = () => import('./chunks/vicius_ejy83vQe.mjs');
const _page12  = () => import('./chunks/una-deriva-psicogeografica-por-el-metro-de-madrid_WcqNz0C5.mjs');
const _page13  = () => import('./chunks/la-muerte-declara-la-querra-a-los-gendarmes_86lVMIHu.mjs');
const _page14  = () => import('./chunks/migracion-y-resistencia-indigena_zVtP1nAR.mjs');
const _page15  = () => import('./chunks/que-no-es-la-psicogeografia_tqfgFLwU.mjs');
const _page16  = () => import('./chunks/canciones-de-trabajo_1-XkhRL8.mjs');
const _page17  = () => import('./chunks/casas-de-carton_8NYz2oMv.mjs');
const _page18  = () => import('./chunks/presentacion_LHaMcqJh.mjs');
const _page19  = () => import('./chunks/la-comuidad_LvIgD_a3.mjs');
const _page20  = () => import('./chunks/folclore_V4wn5Swm.mjs');
const _page21  = () => import('./chunks/no-lugar_wbI-hHDv.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/acciones/juan-carlos-gorreta.mdx", _page2],["src/pages/acciones/lucia-montenegro.mdx", _page3],["src/pages/acciones/vorja-encikutao.mdx", _page4],["src/pages/acciones/briana-weapons.mdx", _page5],["src/pages/acciones/oscar-cabanas.mdx", _page6],["src/pages/acciones/grupo-chasky.mdx", _page7],["src/pages/acciones/nono-murcia.mdx", _page8],["src/pages/acciones/el-chirly.mdx", _page9],["src/pages/acciones/taktel.mdx", _page10],["src/pages/acciones/vicius.mdx", _page11],["src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.astro", _page12],["src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes.astro", _page13],["src/pages/textos/migracion-y-resistencia-indigena.astro", _page14],["src/pages/textos/que-no-es-la-psicogeografia.astro", _page15],["src/pages/textos/canciones-de-trabajo.mdx", _page16],["src/pages/textos/casas-de-carton.mdx", _page17],["src/pages/textos/presentacion.astro", _page18],["src/pages/textos/la-comuidad.astro", _page19],["src/pages/textos/folclore.mdx", _page20],["src/pages/textos/no-lugar.mdx", _page21]]);
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
