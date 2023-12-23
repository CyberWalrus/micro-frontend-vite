import type { FC } from 'react';
import { Link } from '@tanstack/react-router';

export const LayoutHeader: FC = () => (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </nav>
);
