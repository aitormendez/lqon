import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_fHSIkPwp.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/directorio","type":"page","pattern":"^\\/directorio\\/?$","segments":[[{"content":"directorio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/directorio.astro","pathname":"/directorio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/juan-carlos-gorreta","type":"page","pattern":"^\\/acciones\\/juan-carlos-gorreta\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"juan-carlos-gorreta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/juan-carlos-gorreta.mdx","pathname":"/acciones/juan-carlos-gorreta","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/lucia-montenegro","type":"page","pattern":"^\\/acciones\\/lucia-montenegro\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"lucia-montenegro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/lucia-montenegro.mdx","pathname":"/acciones/lucia-montenegro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/vorja-encikutao","type":"page","pattern":"^\\/acciones\\/vorja-encikutao\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"vorja-encikutao","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/vorja-encikutao.mdx","pathname":"/acciones/vorja-encikutao","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/briana-weapons","type":"page","pattern":"^\\/acciones\\/briana-weapons\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"briana-weapons","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/briana-weapons.mdx","pathname":"/acciones/briana-weapons","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/oscar-cabanas","type":"page","pattern":"^\\/acciones\\/oscar-cabanas\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"oscar-cabanas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/oscar-cabanas.mdx","pathname":"/acciones/oscar-cabanas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/grupo-chasky","type":"page","pattern":"^\\/acciones\\/grupo-chasky\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"grupo-chasky","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/grupo-chasky.mdx","pathname":"/acciones/grupo-chasky","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/nono-murcia","type":"page","pattern":"^\\/acciones\\/nono-murcia\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"nono-murcia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/nono-murcia.mdx","pathname":"/acciones/nono-murcia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/el-chirly","type":"page","pattern":"^\\/acciones\\/el-chirly\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"el-chirly","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/el-chirly.mdx","pathname":"/acciones/el-chirly","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/taktel","type":"page","pattern":"^\\/acciones\\/taktel\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"taktel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/taktel.mdx","pathname":"/acciones/taktel","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/acciones/vicius","type":"page","pattern":"^\\/acciones\\/vicius\\/?$","segments":[[{"content":"acciones","dynamic":false,"spread":false}],[{"content":"vicius","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acciones/vicius.mdx","pathname":"/acciones/vicius","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/una-deriva-psicogeografica-por-el-metro-de-madrid","type":"page","pattern":"^\\/textos\\/una-deriva-psicogeografica-por-el-metro-de-madrid\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"una-deriva-psicogeografica-por-el-metro-de-madrid","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx","pathname":"/textos/una-deriva-psicogeografica-por-el-metro-de-madrid","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/la-muerte-declara-la-querra-a-los-gendarmes","type":"page","pattern":"^\\/textos\\/la-muerte-declara-la-querra-a-los-gendarmes\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"la-muerte-declara-la-querra-a-los-gendarmes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes.mdx","pathname":"/textos/la-muerte-declara-la-querra-a-los-gendarmes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/migracion-y-resistencia-indigena","type":"page","pattern":"^\\/textos\\/migracion-y-resistencia-indigena\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"migracion-y-resistencia-indigena","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/migracion-y-resistencia-indigena.mdx","pathname":"/textos/migracion-y-resistencia-indigena","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/que-no-es-la-psicogeografia","type":"page","pattern":"^\\/textos\\/que-no-es-la-psicogeografia\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"que-no-es-la-psicogeografia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/que-no-es-la-psicogeografia.mdx","pathname":"/textos/que-no-es-la-psicogeografia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/canciones-de-trabajo","type":"page","pattern":"^\\/textos\\/canciones-de-trabajo\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"canciones-de-trabajo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/canciones-de-trabajo.mdx","pathname":"/textos/canciones-de-trabajo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/casas-de-carton","type":"page","pattern":"^\\/textos\\/casas-de-carton\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"casas-de-carton","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/casas-de-carton.mdx","pathname":"/textos/casas-de-carton","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/la-comunidad","type":"page","pattern":"^\\/textos\\/la-comunidad\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"la-comunidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/la-comunidad.mdx","pathname":"/textos/la-comunidad","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/presentacion","type":"page","pattern":"^\\/textos\\/presentacion\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"presentacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/presentacion.mdx","pathname":"/textos/presentacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/resonancias","type":"page","pattern":"^\\/textos\\/resonancias\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"resonancias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/resonancias.mdx","pathname":"/textos/resonancias","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/post-logo","type":"page","pattern":"^\\/textos\\/post-logo\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"post-logo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/post-logo.mdx","pathname":"/textos/post-logo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/folclore","type":"page","pattern":"^\\/textos\\/folclore\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"folclore","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/folclore.mdx","pathname":"/textos/folclore","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/juglaria","type":"page","pattern":"^\\/textos\\/juglaria\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"juglaria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/juglaria.mdx","pathname":"/textos/juglaria","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/no-lugar","type":"page","pattern":"^\\/textos\\/no-lugar\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"no-lugar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/no-lugar.mdx","pathname":"/textos/no-lugar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.V0dYC1XO.js"}],"styles":[{"type":"external","src":"/_astro/briana-weapons.fUN7TlHi.css"}],"routeData":{"route":"/textos/punk","type":"page","pattern":"^\\/textos\\/punk\\/?$","segments":[[{"content":"textos","dynamic":false,"spread":false}],[{"content":"punk","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/textos/punk.mdx","pathname":"/textos/punk","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/briana-weapons.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/el-chirly.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/grupo-chasky.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/juan-carlos-gorreta.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/lucia-montenegro.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/nono-murcia.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/oscar-cabanas.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/taktel.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vicius.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/acciones/vorja-encikutao.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/directorio.astro",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/canciones-de-trabajo.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/casas-de-carton.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/folclore.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/juglaria.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/la-comunidad.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/migracion-y-resistencia-indigena.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/no-lugar.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/post-logo.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/presentacion.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/punk.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/que-no-es-la-psicogeografia.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/resonancias.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx",{"propagation":"in-tree","containsHead":true}],["/Users/aitor/Documents/Sites/lqon/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/Users/aitor/Documents/Sites/lqon/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/briana-weapons@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/el-chirly@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/grupo-chasky@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/juan-carlos-gorreta@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/lucia-montenegro@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/nono-murcia@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/oscar-cabanas@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/taktel@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/vicius@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/acciones/vorja-encikutao@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/directorio@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/canciones-de-trabajo@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/casas-de-carton@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/folclore@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/juglaria@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/la-comunidad@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/migracion-y-resistencia-indigena@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/no-lugar@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/post-logo@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/presentacion@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/punk@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/que-no-es-la-psicogeografia@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/resonancias@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid@_@mdx",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/textos/canciones-de-trabajo.mdx":"chunks/pages/canciones-de-trabajo_vhF7gH7Q.mjs","/src/pages/textos/casas-de-carton.mdx":"chunks/pages/casas-de-carton_qKTtL8Lw.mjs","/src/pages/directorio.astro":"chunks/pages/directorio_jrAXM9G2.mjs","/src/pages/acciones/el-chirly.mdx":"chunks/pages/el-chirly_M8eT4zBl.mjs","/src/pages/textos/folclore.mdx":"chunks/pages/folclore_GvEHG5nT.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_voBSQYjH.mjs","/src/pages/acciones/grupo-chasky.mdx":"chunks/pages/grupo-chasky_iKZrp6Ro.mjs","/src/pages/index.astro":"chunks/pages/index_DPKr9LGo.mjs","/src/pages/acciones/juan-carlos-gorreta.mdx":"chunks/pages/juan-carlos-gorreta_OWEYiYgf.mjs","/src/pages/textos/juglaria.mdx":"chunks/pages/juglaria_gMFneMGV.mjs","/src/pages/textos/la-comunidad.mdx":"chunks/pages/la-comunidad_ACYmLqY7.mjs","/src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes.mdx":"chunks/pages/la-muerte-declara-la-querra-a-los-gendarmes_luipbqcd.mjs","/src/pages/acciones/lucia-montenegro.mdx":"chunks/pages/lucia-montenegro_WSm-DGng.mjs","/src/pages/textos/migracion-y-resistencia-indigena.mdx":"chunks/pages/migracion-y-resistencia-indigena_SH88dsq0.mjs","/src/pages/textos/no-lugar.mdx":"chunks/pages/no-lugar_FJp9Byrh.mjs","/src/pages/acciones/nono-murcia.mdx":"chunks/pages/nono-murcia_CKRLNWW1.mjs","/src/pages/acciones/oscar-cabanas.mdx":"chunks/pages/oscar-cabanas_gOxBc756.mjs","/src/pages/textos/post-logo.mdx":"chunks/pages/post-logo_jII2Eheg.mjs","/src/pages/textos/presentacion.mdx":"chunks/pages/presentacion_6mGZ9Ff5.mjs","/src/pages/textos/punk.mdx":"chunks/pages/punk_dUEdkjV5.mjs","/src/pages/textos/que-no-es-la-psicogeografia.mdx":"chunks/pages/que-no-es-la-psicogeografia_V3SfTrQ0.mjs","/src/pages/textos/resonancias.mdx":"chunks/pages/resonancias_cn8dCWp2.mjs","/src/pages/acciones/taktel.mdx":"chunks/pages/taktel_VugWwLMr.mjs","/src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid.mdx":"chunks/pages/una-deriva-psicogeografica-por-el-metro-de-madrid_rsqAQzwk.mjs","/src/pages/acciones/vicius.mdx":"chunks/pages/vicius_2lLXYYSK.mjs","/src/pages/acciones/vorja-encikutao.mdx":"chunks/pages/vorja-encikutao_Uub-libO.mjs","\u0000@astrojs-manifest":"manifest_3dDBeTpv.mjs","/Users/aitor/Documents/Sites/lqon/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_NuUiTeYG.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_O9DVcB3L.mjs","\u0000@astro-page:src/pages/directorio@_@astro":"chunks/directorio_ID98e2iM.mjs","\u0000@astro-page:src/pages/acciones/juan-carlos-gorreta@_@mdx":"chunks/juan-carlos-gorreta_h45hbeHJ.mjs","\u0000@astro-page:src/pages/acciones/lucia-montenegro@_@mdx":"chunks/lucia-montenegro_0td4zH4v.mjs","\u0000@astro-page:src/pages/acciones/vorja-encikutao@_@mdx":"chunks/vorja-encikutao_zizWL0bm.mjs","\u0000@astro-page:src/pages/acciones/briana-weapons@_@mdx":"chunks/briana-weapons_E4kk4cR8.mjs","\u0000@astro-page:src/pages/acciones/oscar-cabanas@_@mdx":"chunks/oscar-cabanas_303UeRNs.mjs","\u0000@astro-page:src/pages/acciones/grupo-chasky@_@mdx":"chunks/grupo-chasky_ECKtrnUM.mjs","\u0000@astro-page:src/pages/acciones/nono-murcia@_@mdx":"chunks/nono-murcia_j35BHxrk.mjs","\u0000@astro-page:src/pages/acciones/el-chirly@_@mdx":"chunks/el-chirly_DsZ_eWpT.mjs","\u0000@astro-page:src/pages/acciones/taktel@_@mdx":"chunks/taktel_NeVS_OLu.mjs","\u0000@astro-page:src/pages/acciones/vicius@_@mdx":"chunks/vicius_8IOTOWe-.mjs","\u0000@astro-page:src/pages/textos/una-deriva-psicogeografica-por-el-metro-de-madrid@_@mdx":"chunks/una-deriva-psicogeografica-por-el-metro-de-madrid_o_AwXay1.mjs","\u0000@astro-page:src/pages/textos/la-muerte-declara-la-querra-a-los-gendarmes@_@mdx":"chunks/la-muerte-declara-la-querra-a-los-gendarmes_jQ3CJ3cV.mjs","\u0000@astro-page:src/pages/textos/migracion-y-resistencia-indigena@_@mdx":"chunks/migracion-y-resistencia-indigena_9GwvG5pA.mjs","\u0000@astro-page:src/pages/textos/que-no-es-la-psicogeografia@_@mdx":"chunks/que-no-es-la-psicogeografia_2-KrS67J.mjs","\u0000@astro-page:src/pages/textos/canciones-de-trabajo@_@mdx":"chunks/canciones-de-trabajo_HZplHAbg.mjs","\u0000@astro-page:src/pages/textos/casas-de-carton@_@mdx":"chunks/casas-de-carton_R0B1LqKg.mjs","\u0000@astro-page:src/pages/textos/la-comunidad@_@mdx":"chunks/la-comunidad_HbPFHBd9.mjs","\u0000@astro-page:src/pages/textos/presentacion@_@mdx":"chunks/presentacion_eXrShaBR.mjs","\u0000@astro-page:src/pages/textos/resonancias@_@mdx":"chunks/resonancias_f39I0On0.mjs","\u0000@astro-page:src/pages/textos/post-logo@_@mdx":"chunks/post-logo_234sP1W9.mjs","\u0000@astro-page:src/pages/textos/folclore@_@mdx":"chunks/folclore_cH-iGACl.mjs","\u0000@astro-page:src/pages/textos/juglaria@_@mdx":"chunks/juglaria_gFpgO3XI.mjs","\u0000@astro-page:src/pages/textos/no-lugar@_@mdx":"chunks/no-lugar_3PKzhcD2.mjs","\u0000@astro-page:src/pages/textos/punk@_@mdx":"chunks/punk_0eZufpjG.mjs","/Users/aitor/Documents/Sites/lqon/src/components/StationLinks":"_astro/StationLinks.RBffuw11.js","/Users/aitor/Documents/Sites/lqon/src/components/NextStation.jsx":"_astro/NextStation.Ob59kAyI.js","/Users/aitor/Documents/Sites/lqon/src/components/Fiber.jsx":"_astro/Fiber.QCa3NoFL.js","/astro/hoisted.js?q=0":"_astro/hoisted.V0dYC1XO.js","/Users/aitor/Documents/Sites/lqon/src/components/CustomTooltip.jsx":"_astro/CustomTooltip.X01aL3zx.js","@astrojs/react/client.js":"_astro/client.irnNCqkp.js","/Users/aitor/Documents/Sites/lqon/node_modules/troika-three-text/dist/troika-three-text.esm.js":"_astro/troika-three-text.esm.7-lTIAV1.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/torno.6YsZh9no.mp4","/_astro/lo-quieras-o-no.k6HE9T3j.svg","/_astro/briana-weapons.fUN7TlHi.css","/favicon.svg","/_astro/CustomTooltip.X01aL3zx.js","/_astro/Fiber.QCa3NoFL.js","/_astro/Fiber.ValeLTS4.js","/_astro/NextStation.Ob59kAyI.js","/_astro/StationLinks.RBffuw11.js","/_astro/client.irnNCqkp.js","/_astro/hoisted.V0dYC1XO.js","/_astro/index.flahDFoG.js","/_astro/index.pNoFJhTY.js","/_astro/jsx-runtime.QP8Mob9_.js","/_astro/stations.JvbQSrP_.js","/_astro/stores.qSepLiJ3.js","/_astro/troika-three-text.esm.7-lTIAV1.js","/fonts/CrimsonPro-Bold.woff","/fonts/CrimsonPro-BoldItalic.woff","/fonts/CrimsonPro-Italic.woff","/fonts/CrimsonPro-Light.woff","/fonts/CrimsonPro-LightItalic.woff","/fonts/CrimsonPro-Regular.woff","/fonts/helveue-black-webfont.woff","/fonts/helveue-blackitalic-webfont.woff","/fonts/helveue-bold-webfont.woff","/fonts/helveue-bold-webfont.woff2","/fonts/helveue-bolditalic-webfont.woff","/fonts/helveue-bolditalic-webfont.woff2","/fonts/helveue-italic-webfont.woff","/fonts/helveue-lt-webfont.woff","/fonts/helveue-ltit-webfont.woff","/fonts/helveue-md-webfont.woff","/fonts/helveue-mdit-webfont.woff","/fonts/helveue-regular-webfont.woff","/models/anden.glb","/models/anden2.glb","/models/torno-cuerpo.glb","/models/torno-torno.glb","/models/torno.glb"]});

export { manifest };
