import { lazy, Suspense } from 'react';
import { Outlet, RootRoute } from '@tanstack/react-router';

import { Layout } from '$shared/ui';
import { LayoutHeader } from '$widgets/layout-header';

const TanStackRouterDevtools =
    process.env.NODE_ENV === 'production'
        ? () => null // Render nothing in production
        : lazy(() =>
              // Lazy load in development
              import('@tanstack/router-devtools').then((res) => ({
                  default: res.TanStackRouterDevtools,
                  // For Embedded Mode
                  // default: res.TanStackRouterDevtoolsPanel
              })),
          );

export const rootRoute = new RootRoute({
    component: () => (
        <Suspense>
            <Layout
                header={<LayoutHeader />}
                main={<Outlet />}
            />
            <TanStackRouterDevtools />
        </Suspense>
    ),
});
