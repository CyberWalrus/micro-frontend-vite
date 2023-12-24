import { lazyRouteComponent, NotFoundRoute } from '@tanstack/react-router';

import { rootRoute } from '$widgets/root-route/root-route';

export const notFoundRoute = new NotFoundRoute({
    component: lazyRouteComponent(() => import('./not-found')),
    getParentRoute: () => rootRoute,
});
