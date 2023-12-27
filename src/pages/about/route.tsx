import { lazyRouteComponent, Route } from '@tanstack/react-router';

import { Spinner } from '$shared/ui';
import { rootRoute } from '$widgets/root-route/root-route';

export const aboutRoute = new Route({
    component: lazyRouteComponent(() => import('./about')),
    gcTime: 0,
    getParentRoute: () => rootRoute,
    loader: async () => {
        const isAwait = new Promise((res) => {
            setTimeout(() => {
                res(true);
            }, 2000);
        });

        await isAwait;

        return true;
    },
    path: '/about',
    pendingComponent: Spinner,
});
