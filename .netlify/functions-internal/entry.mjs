import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_S4XRV1zq.mjs';

const _page0  = () => import('./chunks/generic_smRpEQKM.mjs');
const _page1  = () => import('./chunks/index_LG5Z965z.mjs');
const _page2  = () => import('./chunks/juan-carlos-gorreta_dKI-Y3Q8.mjs');
const _page3  = () => import('./chunks/lucia-montenegro_KqFi73b_.mjs');
const _page4  = () => import('./chunks/vorja-encikutao_rDh2sgiN.mjs');
const _page5  = () => import('./chunks/briana-weapons_Efx1bzKl.mjs');
const _page6  = () => import('./chunks/oscar-cabanas_LrbjgdGK.mjs');
const _page7  = () => import('./chunks/grupo-chasky_J-gxCe8L.mjs');
const _page8  = () => import('./chunks/nono-murcia_5nloSVDm.mjs');
const _page9  = () => import('./chunks/el-chirly_JjqHCYD7.mjs');
const _page10  = () => import('./chunks/taktel_zQtS5-8x.mjs');
const _page11  = () => import('./chunks/vicius_vSU6WuV7.mjs');
const _page12  = () => import('./chunks/una-deriva-psicogeografica-por-el-metro-de-madrid_yw0v3UFR.mjs');
const _page13  = () => import('./chunks/la-muerte-declara-la-querra-a-los-gendarmes_AsVYm5Sv.mjs');
const _page14  = () => import('./chunks/migracion-y-resistencia-indigena_vAKhy9Ei.mjs');
const _page15  = () => import('./chunks/que-no-es-la-psicogeografia_9DE1QXdB.mjs');
const _page16  = () => import('./chunks/canciones-de-trabajo_eFoPzU74.mjs');
const _page17  = () => import('./chunks/casas-de-carton_wPKixDb-.mjs');
const _page18  = () => import('./chunks/presentacion_72EoP73Y.mjs');
const _page19  = () => import('./chunks/la-comuidad_V4MefAI2.mjs');
const _page20  = () => import('./chunks/no-lugar_FBru3hKj.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/acciones/juan-carlos-gorreta.astro", _page2],["src/pages/acciones/lucia-montenegro.astro", _page3],["src/pages/acciones/vorja-encikutao.astro", _page4],["src/pages/acciones/briana-weapons.astro", _page5],["src/pages/acciones/oscar-cabanas.astro", _page6],["src/pages/acciones/grupo-chasky.astro", _page7],["src/pages/acciones/nono-murcia.astro", _page8],["src/pages/acciones/el-chirly.astro", _page9],["src/pages/acciones/taktel.astro", _page10],["src/pages/acciones/vicius.astro", _page11],["src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.astro", _page12],["src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes.astro", _page13],["src/pages/textos/migracion-y-resistencia-indigena.astro", _page14],["src/pages/textos/que-no-es-la-psicogeografia.astro", _page15],["src/pages/textos/canciones-de-trabajo.astro", _page16],["src/pages/textos/casas-de-carton.astro", _page17],["src/pages/textos/presentacion.astro", _page18],["src/pages/textos/la-comuidad.astro", _page19],["src/pages/textos/no-lugar.astro", _page20]]);
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
