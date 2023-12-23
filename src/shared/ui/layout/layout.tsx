import type { FC } from 'react';

import type { LayoutProps } from './types';

import classes from './styles.module.scss';

export const Layout: FC<LayoutProps> = (...props) => (
    <section
        className={classes.spinner}
        {...props}
    >
        ...
    </section>
);
