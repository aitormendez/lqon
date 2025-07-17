import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Cu4DvlwR.mjs';
import { manifest } from './manifest_BuAz6-4B.mjs';
import { createExports } from '@astrojs/netlify/netlify-functions.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/acciones/briana-weapons.astro.mjs');
const _page2 = () => import('./pages/acciones/el-chirly.astro.mjs');
const _page3 = () => import('./pages/acciones/grupo-chasky.astro.mjs');
const _page4 = () => import('./pages/acciones/juan-carlos-gorreta.astro.mjs');
const _page5 = () => import('./pages/acciones/lucia-montenegro.astro.mjs');
const _page6 = () => import('./pages/acciones/nono-murcia.astro.mjs');
const _page7 = () => import('./pages/acciones/oscar-cabanas.astro.mjs');
const _page8 = () => import('./pages/acciones/taktel.astro.mjs');
const _page9 = () => import('./pages/acciones/vicius.astro.mjs');
const _page10 = () => import('./pages/acciones/vorja-encikutao.astro.mjs');
const _page11 = () => import('./pages/textos/canciones-de-trabajo.astro.mjs');
const _page12 = () => import('./pages/textos/casas-de-carton.astro.mjs');
const _page13 = () => import('./pages/textos/folclore.astro.mjs');
const _page14 = () => import('./pages/textos/juglaria.astro.mjs');
const _page15 = () => import('./pages/textos/la-comunidad.astro.mjs');
const _page16 = () => import('./pages/textos/la-muerte-declara-la-guerra-a-los-gendarmes.astro.mjs');
const _page17 = () => import('./pages/textos/migracion-y-resistencia-indigena.astro.mjs');
const _page18 = () => import('./pages/textos/no-lugar.astro.mjs');
const _page19 = () => import('./pages/textos/post-logo.astro.mjs');
const _page20 = () => import('./pages/textos/presentacion.astro.mjs');
const _page21 = () => import('./pages/textos/psico-6.astro.mjs');
const _page22 = () => import('./pages/textos/psico-7.astro.mjs');
const _page23 = () => import('./pages/textos/que-no-es-la-psicogeografia.astro.mjs');
const _page24 = () => import('./pages/textos/resonancias.astro.mjs');
const _page25 = () => import('./pages/textos/trabajo.astro.mjs');
const _page26 = () => import('./pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/acciones/briana-weapons.mdx", _page1],
    ["src/pages/acciones/el-chirly.mdx", _page2],
    ["src/pages/acciones/grupo-chasky.mdx", _page3],
    ["src/pages/acciones/juan-carlos-gorreta.mdx", _page4],
    ["src/pages/acciones/lucia-montenegro.mdx", _page5],
    ["src/pages/acciones/nono-murcia.mdx", _page6],
    ["src/pages/acciones/oscar-cabanas.mdx", _page7],
    ["src/pages/acciones/taktel.mdx", _page8],
    ["src/pages/acciones/vicius.mdx", _page9],
    ["src/pages/acciones/vorja-encikutao.mdx", _page10],
    ["src/pages/textos/canciones-de-trabajo.mdx", _page11],
    ["src/pages/textos/casas-de-carton.mdx", _page12],
    ["src/pages/textos/folclore.mdx", _page13],
    ["src/pages/textos/juglaria.mdx", _page14],
    ["src/pages/textos/la-comunidad.mdx", _page15],
    ["src/pages/textos/la-muerte-declara-la-guerra-a-los-gendarmes.mdx", _page16],
    ["src/pages/textos/migracion-y-resistencia-indigena.mdx", _page17],
    ["src/pages/textos/no-lugar.mdx", _page18],
    ["src/pages/textos/post-logo.mdx", _page19],
    ["src/pages/textos/presentacion.mdx", _page20],
    ["src/pages/textos/psico-6.mdx", _page21],
    ["src/pages/textos/psico-7.mdx", _page22],
    ["src/pages/textos/que-no-es-la-psicogeografia.mdx", _page23],
    ["src/pages/textos/resonancias.mdx", _page24],
    ["src/pages/textos/trabajo.mdx", _page25],
    ["src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx", _page26],
    ["src/pages/index.astro", _page27]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, pageMap };
