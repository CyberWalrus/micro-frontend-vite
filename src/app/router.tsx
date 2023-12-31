import { Router } from '@tanstack/react-router';

import { aboutRoute, homeRoute, notFoundRoute } from '$pages';
import { rootRoute } from '$widgets';

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = new Router({ notFoundRoute, routeTree });

declare module '@tanstack/react-router' {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Register {
        router: typeof router;
    }
}
