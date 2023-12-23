import type { FC } from 'react';
import { clsx } from 'clsx';

import type { LayoutProps } from './types';

import classes from './styles.module.scss';

export const Layout: FC<LayoutProps> = ({
    aside,
    footer,
    title,
    main,
    header,
    className,
    classNameHeader,
    classNameAside,
    classNameFooter,
    classNameTitle,
    classNameMain,
    ...props
}) => (
    <section
        className={clsx(classes.layout, className)}
        {...props}
    >
        {title && <h1 className={clsx(classes.title, classNameTitle)}>{title}</h1>}
        {main && <section className={clsx(classes.main, classNameMain)}>{main}</section>}
        {header && <header className={clsx(classes.header, classNameHeader)}>{header}</header>}
        {footer && <footer className={clsx(classes.footer, classNameFooter)}>{footer}</footer>}
        {aside && <aside className={clsx(classes.aside, classNameAside)}>{aside}</aside>}
    </section>
);
