import type { ReactNode } from 'react';

export type LayoutProps = {
    aside?: ReactNode;
    className?: string;
    classNameAside?: string;
    classNameFooter?: string;
    classNameHeader?: string;
    classNameMain?: string;
    classNameTitle?: string;
    footer?: ReactNode;
    header?: ReactNode;
    main?: ReactNode;
    title?: ReactNode;
};
