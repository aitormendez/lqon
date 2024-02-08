export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/canciones-de-trabajo_FCZacCE1.mjs').then(n => n.c);

export { page };
