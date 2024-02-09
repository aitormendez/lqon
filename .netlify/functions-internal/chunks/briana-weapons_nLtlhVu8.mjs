export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/briana-weapons_R_2aS7kg.mjs').then(n => n.c);

export { page };
