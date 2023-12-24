import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';

import { router } from './router';

import '$shared/styles/main.scss';
import '$shared/styles/colors.scss';

export const initApp = () => {
    const root = document.getElementById('root') as HTMLElement;

    createRoot(root).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    );
};
