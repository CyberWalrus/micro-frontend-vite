import { Route } from '@tanstack/react-router';

import { RootRoute } from '$widgets/root-route/root-route';

import { About } from './about';

export const homeRoute = new Route({
    component: About,
    getParentRoute: () => RootRoute,
    path: '/about',
});
