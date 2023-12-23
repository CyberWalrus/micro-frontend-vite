import { lazy } from 'react';
import { Route } from '@tanstack/react-router';

import { rootRoute } from '$widgets/root-route/root-route';

const Home = lazy(() => import('./home'));

export const aboutRoute = new Route({
    component: Home,
    getParentRoute: () => rootRoute,
    path: '/',
});
