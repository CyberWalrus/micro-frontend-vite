import { lazyRouteComponent, Route } from '@tanstack/react-router';

import { rootRoute } from '$widgets/root-route/root-route';

export const aboutRoute = new Route({
    component: lazyRouteComponent(() => import('./home')),
    getParentRoute: () => rootRoute,
    path: '/',
});
