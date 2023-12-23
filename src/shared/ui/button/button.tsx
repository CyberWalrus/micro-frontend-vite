import type { FC } from 'react';

import type { ButtonProps } from './types';

import classes from './styles.module.scss';

export const Button: FC<ButtonProps> = ({ children = 'test', ...props }) => (
    <button
        className={classes.button}
        type='button'
        {...props}
    >
        {children}
    </button>
);
