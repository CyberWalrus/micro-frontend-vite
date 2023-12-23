import { lazy } from 'react';
import { Route } from '@tanstack/react-router';

import { rootRoute } from '$widgets/root-route/root-route';

const About = lazy(() => import('./about'));

export const homeRoute = new Route({
    component: About,
    getParentRoute: () => rootRoute,
    path: '/about',
});
