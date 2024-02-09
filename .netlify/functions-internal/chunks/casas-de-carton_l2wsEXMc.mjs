export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/casas-de-carton_B1HkgVqs.mjs').then(n => n.c);

export { page };
