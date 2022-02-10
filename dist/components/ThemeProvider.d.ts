import React, { PropsWithChildren, ReactElement } from 'react';
import { Theme } from '@srclaunch/types';
declare type ThemeProviderProps = PropsWithChildren<{
    className?: string;
    theme?: Theme['id'];
    themes?: Theme[];
}>;
export declare const ThemeProvider: React.MemoExoticComponent<({ className, children, theme, themes, }: ThemeProviderProps) => ReactElement>;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map