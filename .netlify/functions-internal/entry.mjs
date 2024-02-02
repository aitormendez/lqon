import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fhtBNS-m.mjs';

const _page0  = () => import('./chunks/generic_tszLti80.mjs');
const _page1  = () => import('./chunks/index_29HURM6q.mjs');
const _page2  = () => import('./chunks/juan-carlos-gorreta_qbRA_pZh.mjs');
const _page3  = () => import('./chunks/lucia-montenegro_Tgu1OBRJ.mjs');
const _page4  = () => import('./chunks/vorja-encikutao_Qc4q46WP.mjs');
const _page5  = () => import('./chunks/briana-weapons_AFEXHCdL.mjs');
const _page6  = () => import('./chunks/oscar-cabanas_oDeBFrkx.mjs');
const _page7  = () => import('./chunks/grupo-chasky_KtpdwKb-.mjs');
const _page8  = () => import('./chunks/nono-murcia_GVvgcSTa.mjs');
const _page9  = () => import('./chunks/el-chirly_DOkYHfpe.mjs');
const _page10  = () => import('./chunks/taktel_b4RbT059.mjs');
const _page11  = () => import('./chunks/vicius_am5wxFfB.mjs');
const _page12  = () => import('./chunks/una-deriva-psicogeografica-por-el-metro-de-madrid_k3XB1WsI.mjs');
const _page13  = () => import('./chunks/la-muerte-declara-la-querra-a-los-gendarmes_Jyi4HOeE.mjs');
const _page14  = () => import('./chunks/migracion-y-resistencia-indigena_SyNvxCvw.mjs');
const _page15  = () => import('./chunks/que-no-es-la-psicogeografia_ayJhC7zL.mjs');
const _page16  = () => import('./chunks/canciones-de-trabajo_R04ddew5.mjs');
const _page17  = () => import('./chunks/casas-de-carton_cF0jPMUf.mjs');
const _page18  = () => import('./chunks/la-comunidad_z6rIjV1z.mjs');
const _page19  = () => import('./chunks/presentacion_DP0qwiU9.mjs');
const _page20  = () => import('./chunks/resonancias_rIVMgzoC.mjs');
const _page21  = () => import('./chunks/post-logo_rZyVXYDw.mjs');
const _page22  = () => import('./chunks/folclore_WptTinoF.mjs');
const _page23  = () => import('./chunks/juglaria_R8nJmE0k.mjs');
const _page24  = () => import('./chunks/no-lugar_Bo71lfW-.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/acciones/juan-carlos-gorreta.mdx", _page2],["src/pages/acciones/lucia-montenegro.mdx", _page3],["src/pages/acciones/vorja-encikutao.mdx", _page4],["src/pages/acciones/briana-weapons.mdx", _page5],["src/pages/acciones/oscar-cabanas.mdx", _page6],["src/pages/acciones/grupo-chasky.mdx", _page7],["src/pages/acciones/nono-murcia.mdx", _page8],["src/pages/acciones/el-chirly.mdx", _page9],["src/pages/acciones/taktel.mdx", _page10],["src/pages/acciones/vicius.mdx", _page11],["src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx", _page12],["src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes.mdx", _page13],["src/pages/textos/migracion-y-resistencia-indigena.mdx", _page14],["src/pages/textos/que-no-es-la-psicogeografia.mdx", _page15],["src/pages/textos/canciones-de-trabajo.mdx", _page16],["src/pages/textos/casas-de-carton.mdx", _page17],["src/pages/textos/la-comunidad.mdx", _page18],["src/pages/textos/presentacion.mdx", _page19],["src/pages/textos/resonancias.mdx", _page20],["src/pages/textos/post-logo.mdx", _page21],["src/pages/textos/folclore.mdx", _page22],["src/pages/textos/juglaria.mdx", _page23],["src/pages/textos/no-lugar.mdx", _page24]]);
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
