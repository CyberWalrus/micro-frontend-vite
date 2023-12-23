import { Route } from '@tanstack/react-router';

import { RootRoute } from '$widgets/root-route/root-route';

import { Home } from './home';

export const aboutRoute = new Route({
    component: Home,
    getParentRoute: () => RootRoute,
    path: '/',
});
