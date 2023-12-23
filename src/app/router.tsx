import { Router } from '@tanstack/react-router';

import { aboutRoute, homeRoute } from '$pages';
import { RootRoute } from '$widgets';

const routeTree = RootRoute.addChildren([homeRoute, aboutRoute]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Register {
        router: typeof router;
    }
}
