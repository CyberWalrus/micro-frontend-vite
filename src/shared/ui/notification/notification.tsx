import type { FC } from 'react';

import type { NotificationProps } from './types';

import classes from './styles.module.scss';

export const Notification: FC<NotificationProps> = ({ children = 'test', ...props }) => (
    <article
        className={classes.notification}
        {...props}
    >
        {children}
    </article>
);
