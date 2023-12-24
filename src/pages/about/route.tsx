import { lazyRouteComponent, Route } from '@tanstack/react-router';

import { rootRoute } from '$widgets/root-route/root-route';

export const homeRoute = new Route({
    beforeLoad: () => ({
        foo: 'bar',
    }),
    component: lazyRouteComponent(() => import('./about')),
    gcTime: 0,
    getParentRoute: () => rootRoute,
    loader: () => {
        const isAwait = new Promise((res) => {
            setTimeout(() => {
                res(true);
            }, 2000);
        });

        return isAwait;

        // ...
    },
    path: '/about',
});
