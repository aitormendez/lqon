import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_7G7-JzEm.mjs';

const _page0  = () => import('./chunks/generic_b9txZnhy.mjs');
const _page1  = () => import('./chunks/index_ORCOrPl3.mjs');
const _page2  = () => import('./chunks/juan-carlos-gorreta_4eMQ4-J9.mjs');
const _page3  = () => import('./chunks/lucia-montenegro_akkG1GKD.mjs');
const _page4  = () => import('./chunks/vorja-encikutao_ZcmQeQu0.mjs');
const _page5  = () => import('./chunks/briana-weapons_5RDwjTUj.mjs');
const _page6  = () => import('./chunks/oscar-cabanas_8P2LSjCM.mjs');
const _page7  = () => import('./chunks/grupo-chasky_P1JdZz9t.mjs');
const _page8  = () => import('./chunks/nono-murcia_QRj6PfRj.mjs');
const _page9  = () => import('./chunks/el-chirly_ZiurDbKA.mjs');
const _page10  = () => import('./chunks/taktel_3autYkvr.mjs');
const _page11  = () => import('./chunks/vicius_SdDLTDm1.mjs');
const _page12  = () => import('./chunks/una-deriva-psicogeografica-por-el-metro-de-madrid_29Vp30JW.mjs');
const _page13  = () => import('./chunks/la-muerte-declara-la-guerra-a-los-gendarmes_J1DLonyZ.mjs');
const _page14  = () => import('./chunks/migracion-y-resistencia-indigena_R3Pg3NDa.mjs');
const _page15  = () => import('./chunks/que-no-es-la-psicogeografia_Awy-OSAq.mjs');
const _page16  = () => import('./chunks/canciones-de-trabajo__TXMDcQ8.mjs');
const _page17  = () => import('./chunks/casas-de-carton_536I6yeA.mjs');
const _page18  = () => import('./chunks/la-comunidad_-hWUG3EL.mjs');
const _page19  = () => import('./chunks/presentacion_UFKtkLlO.mjs');
const _page20  = () => import('./chunks/resonancias_DaltHjQp.mjs');
const _page21  = () => import('./chunks/post-logo_jO-GOyb-.mjs');
const _page22  = () => import('./chunks/folclore_LPn9XXiI.mjs');
const _page23  = () => import('./chunks/juglaria_QMzgPDzD.mjs');
const _page24  = () => import('./chunks/no-lugar_sFfTse_n.mjs');
const _page25  = () => import('./chunks/punk_ZfzvPk9u.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/acciones/juan-carlos-gorreta.mdx", _page2],["src/pages/acciones/lucia-montenegro.mdx", _page3],["src/pages/acciones/vorja-encikutao.mdx", _page4],["src/pages/acciones/briana-weapons.mdx", _page5],["src/pages/acciones/oscar-cabanas.mdx", _page6],["src/pages/acciones/grupo-chasky.mdx", _page7],["src/pages/acciones/nono-murcia.mdx", _page8],["src/pages/acciones/el-chirly.mdx", _page9],["src/pages/acciones/taktel.mdx", _page10],["src/pages/acciones/vicius.mdx", _page11],["src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx", _page12],["src/pages/textos/la-muerte-declara-la-guerra-a-los-gendarmes.mdx", _page13],["src/pages/textos/migracion-y-resistencia-indigena.mdx", _page14],["src/pages/textos/que-no-es-la-psicogeografia.mdx", _page15],["src/pages/textos/canciones-de-trabajo.mdx", _page16],["src/pages/textos/casas-de-carton.mdx", _page17],["src/pages/textos/la-comunidad.mdx", _page18],["src/pages/textos/presentacion.mdx", _page19],["src/pages/textos/resonancias.mdx", _page20],["src/pages/textos/post-logo.mdx", _page21],["src/pages/textos/folclore.mdx", _page22],["src/pages/textos/juglaria.mdx", _page23],["src/pages/textos/no-lugar.mdx", _page24],["src/pages/textos/punk.mdx", _page25]]);
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
