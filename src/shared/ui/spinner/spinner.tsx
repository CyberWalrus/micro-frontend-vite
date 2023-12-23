import type { FC } from 'react';

import type { SpinnerProps } from './types';

import classes from './styles.module.scss';

export const Spinner: FC<SpinnerProps> = (...props) => (
    <section
        className={classes.spinner}
        {...props}
    >
        ...
    </section>
);
