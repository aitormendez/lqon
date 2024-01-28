import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_HIGthTr3.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/juan-carlos-gorreta","type":"page","pattern":"^\\/acciones\\/juan-carlos-gorreta\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"juan-carlos-gorreta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/juan-carlos-gorreta.astro","pathname":"/acciones/juan-carlos-gorreta","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/lucia-montenegro","type":"page","pattern":"^\\/acciones\\/lucia-montenegro\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"lucia-montenegro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/lucia-montenegro.astro","pathname":"/acciones/lucia-montenegro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/vorja-encikutao","type":"page","pattern":"^\\/acciones\\/vorja-encikutao\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"vorja-encikutao","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/vorja-encikutao.astro","pathname":"/acciones/vorja-encikutao","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/briana-weapons","type":"page","pattern":"^\\/acciones\\/briana-weapons\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"briana-weapons","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/briana-weapons.astro","pathname":"/acciones/briana-weapons","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/oscar-cabanas","type":"page","pattern":"^\\/acciones\\/oscar-cabanas\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"oscar-cabanas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/oscar-cabanas.astro","pathname":"/acciones/oscar-cabanas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/grupo-chasky","type":"page","pattern":"^\\/acciones\\/grupo-chasky\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"grupo-chasky","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/grupo-chasky.astro","pathname":"/acciones/grupo-chasky","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/nono-murcia","type":"page","pattern":"^\\/acciones\\/nono-murcia\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"nono-murcia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/nono-murcia.astro","pathname":"/acciones/nono-murcia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/el-chirly","type":"page","pattern":"^\\/acciones\\/el-chirly\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"el-chirly","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/el-chirly.astro","pathname":"/acciones/el-chirly","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/taktel","type":"page","pattern":"^\\/acciones\\/taktel\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"taktel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/taktel.astro","pathname":"/acciones/taktel","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/acciones/vicius","type":"page","pattern":"^\\/acciones\\/vicius\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"vicius","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/vicius.astro","pathname":"/acciones/vicius","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/textos/una-deriva-psicogeografica-por-el-metro-de-madrid","type":"page","pattern":"^\\/textos\\/una-deriva-psicogeografica-por-el-metro-de-madrid\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"una-deriva-psicogeografica-por-el-metro-de-madrid","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.astro","pathname":"/textos/una-deriva-psicogeografica-por-el-metro-de-madrid","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/textos/el-azar-arremete-contra-la-policia","type":"page","pattern":"^\\/textos\\/el-azar-arremete-contra-la-policia\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"el-azar-arremete-contra-la-policia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/el-azar-arremete-contra-la-policia.astro","pathname":"/textos/el-azar-arremete-contra-la-policia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/textos/que-no-es-la-psicogeografia","type":"page","pattern":"^\\/textos\\/que-no-es-la-psicogeografia\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"que-no-es-la-psicogeografia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/que-no-es-la-psicogeografia.astro","pathname":"/textos/que-no-es-la-psicogeografia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/textos/canciones-de-trabajo","type":"page","pattern":"^\\/textos\\/canciones-de-trabajo\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"canciones-de-trabajo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/canciones-de-trabajo.astro","pathname":"/textos/canciones-de-trabajo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/textos/casas-de-carton","type":"page","pattern":"^\\/textos\\/casas-de-carton\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"casas-de-carton","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/casas-de-carton.astro","pathname":"/textos/casas-de-carton","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/textos/presentacion","type":"page","pattern":"^\\/textos\\/presentacion\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"presentacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/presentacion.astro","pathname":"/textos/presentacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/textos/la-comuidad","type":"page","pattern":"^\\/textos\\/la-comuidad\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"la-comuidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/la-comuidad.astro","pathname":"/textos/la-comuidad","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/briana-weapons.ietIKNvk.css"}],"routeData":{"route":"/textos/no-lugar","type":"page","pattern":"^\\/textos\\/no-lugar\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"no-lugar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/no-lugar.astro","pathname":"/textos/no-lugar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/briana-weapons.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/el-chirly.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/grupo-chasky.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/juan-carlos-gorreta.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/lucia-montenegro.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/nono-murcia.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/oscar-cabanas.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/taktel.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vicius.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vorja-encikutao.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/canciones-de-trabajo.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/casas-de-carton.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/el-azar-arremete-contra-la-policia.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/la-comuidad.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/no-lugar.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/presentacion.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/que-no-es-la-psicogeografia.astro",{"propagation":"none","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/textos/canciones-de-trabajo.astro":"chunks/pages/canciones-de-trabajo_m9pW3AWR.mjs","/src/pages/textos/casas-de-carton.astro":"chunks/pages/casas-de-carton_ymdsqO4W.mjs","/src/pages/textos/el-azar-arremete-contra-la-policia.astro":"chunks/pages/el-azar-arremete-contra-la-policia_-sT7qdkC.mjs","/src/pages/acciones/el-chirly.astro":"chunks/pages/el-chirly_kSSbwkG9.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_WIGSeYY7.mjs","/src/pages/acciones/grupo-chasky.astro":"chunks/pages/grupo-chasky_i9HSEvLQ.mjs","/src/pages/index.astro":"chunks/pages/index_M41QC7Qg.mjs","/src/pages/acciones/juan-carlos-gorreta.astro":"chunks/pages/juan-carlos-gorreta_fj_bUEfM.mjs","/src/pages/textos/la-comuidad.astro":"chunks/pages/la-comuidad_3g3yFiw4.mjs","/src/pages/acciones/lucia-montenegro.astro":"chunks/pages/lucia-montenegro_CTOp6Wou.mjs","/src/pages/textos/no-lugar.astro":"chunks/pages/no-lugar_9a3rjcLp.mjs","/src/pages/acciones/nono-murcia.astro":"chunks/pages/nono-murcia_DbUtTj9n.mjs","/src/pages/acciones/oscar-cabanas.astro":"chunks/pages/oscar-cabanas_eL494Frg.mjs","/src/pages/textos/presentacion.astro":"chunks/pages/presentacion_A0eIPVU4.mjs","/src/pages/textos/que-no-es-la-psicogeografia.astro":"chunks/pages/que-no-es-la-psicogeografia_bC5anpxv.mjs","/src/pages/acciones/taktel.astro":"chunks/pages/taktel_898fFLdu.mjs","/src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.astro":"chunks/pages/una-deriva-psicogeografica-por-el-metro-de-madrid_R7W3Dnyd.mjs","/src/pages/acciones/vicius.astro":"chunks/pages/vicius_8QkeT4lV.mjs","/src/pages/acciones/vorja-encikutao.astro":"chunks/pages/vorja-encikutao_bTjJ-IFE.mjs","\u0000@astrojs-manifest":"manifest_7DQpzAGn.mjs","/Users/aitor/Documents/Sites/lqon/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_F78wFApf.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_kB7J_pZ6.mjs","\u0000@astro-page:src/pages/acciones/juan-carlos-gorreta@_@astro":"chunks/juan-carlos-gorreta_nbj8EYXD.mjs","\u0000@astro-page:src/pages/acciones/lucia-montenegro@_@astro":"chunks/lucia-montenegro_Fwn68cDr.mjs","\u0000@astro-page:src/pages/acciones/vorja-encikutao@_@astro":"chunks/vorja-encikutao_zQ3AnNOR.mjs","\u0000@astro-page:src/pages/acciones/briana-weapons@_@astro":"chunks/briana-weapons_J2gJemMP.mjs","\u0000@astro-page:src/pages/acciones/oscar-cabanas@_@astro":"chunks/oscar-cabanas_xR3A51PT.mjs","\u0000@astro-page:src/pages/acciones/grupo-chasky@_@astro":"chunks/grupo-chasky_zheIsQrC.mjs","\u0000@astro-page:src/pages/acciones/nono-murcia@_@astro":"chunks/nono-murcia_BCMBgEeD.mjs","\u0000@astro-page:src/pages/acciones/el-chirly@_@astro":"chunks/el-chirly_S-daEKvx.mjs","\u0000@astro-page:src/pages/acciones/taktel@_@astro":"chunks/taktel_ICOf03GG.mjs","\u0000@astro-page:src/pages/acciones/vicius@_@astro":"chunks/vicius_Wl8SJ6iA.mjs","\u0000@astro-page:src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid@_@astro":"chunks/una-deriva-psicogeografica-por-el-metro-de-madrid_3HagbX2w.mjs","\u0000@astro-page:src/pages/textos/el-azar-arremete-contra-la-policia@_@astro":"chunks/el-azar-arremete-contra-la-policia_rPpD5a03.mjs","\u0000@astro-page:src/pages/textos/que-no-es-la-psicogeografia@_@astro":"chunks/que-no-es-la-psicogeografia_dQt6yDYe.mjs","\u0000@astro-page:src/pages/textos/canciones-de-trabajo@_@astro":"chunks/canciones-de-trabajo_Zq1ovX32.mjs","\u0000@astro-page:src/pages/textos/casas-de-carton@_@astro":"chunks/casas-de-carton_fjbzzKCT.mjs","\u0000@astro-page:src/pages/textos/presentacion@_@astro":"chunks/presentacion_r7WUPt6w.mjs","\u0000@astro-page:src/pages/textos/la-comuidad@_@astro":"chunks/la-comuidad_RlJeOZk1.mjs","\u0000@astro-page:src/pages/textos/no-lugar@_@astro":"chunks/no-lugar_biAqntJC.mjs","/Users/aitor/Documents/Sites/lqon/src/components/Menu.jsx":"_astro/Menu.lc5Fj3qO.js","/Users/aitor/Documents/Sites/lqon/src/components/Fiber.jsx":"_astro/Fiber.EwzKW-uF.js","@astrojs/react/client.js":"_astro/client.olTvLX7Y.js","/Users/aitor/Documents/Sites/lqon/node_modules/troika-three-text/dist/troika-three-text.esm.js":"_astro/troika-three-text.esm.nclcybVr.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/briana-weapons.ietIKNvk.css","/favicon.svg","/_astro/Fiber.EwzKW-uF.js","/_astro/Fiber.qra-M5sA.js","/_astro/Menu.lc5Fj3qO.js","/_astro/client.olTvLX7Y.js","/_astro/index.LFf77hJu.js","/_astro/stations.NpBy8y8Z.js","/_astro/troika-three-text.esm.nclcybVr.js","/fonts/CrimsonPro-Bold.woff","/fonts/CrimsonPro-BoldItalic.woff","/fonts/CrimsonPro-Italic.woff","/fonts/CrimsonPro-Light.woff","/fonts/CrimsonPro-LightItalic.woff","/fonts/CrimsonPro-Regular.woff","/fonts/helveue-black-webfont.woff","/fonts/helveue-blackitalic-webfont.woff","/fonts/helveue-bold-webfont.woff","/fonts/helveue-bold-webfont.woff2","/fonts/helveue-bolditalic-webfont.woff","/fonts/helveue-bolditalic-webfont.woff2","/fonts/helveue-italic-webfont.woff","/fonts/helveue-lt-webfont.woff","/fonts/helveue-ltit-webfont.woff","/fonts/helveue-md-webfont.woff","/fonts/helveue-mdit-webfont.woff","/fonts/helveue-regular-webfont.woff","/img/lo-quieras-o-no.svg","/models/anden.glb","/models/anden2.glb","/models/torno-cuerpo.glb","/models/torno-torno.glb","/models/torno.glb"]});

export { manifest };