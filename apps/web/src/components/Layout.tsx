import React from "react";

import { CssBaseline } from "@mui/material";
import { Global } from "@emotion/react";

import { Header } from "@components/Header";

import { GlobalStyles } from "@components/Layout.styles";

export interface LayoutProps {
    fullWidth?: boolean;
}

export default function Layout({ children, fullWidth = false }: React.PropsWithChildren<LayoutProps>) {
    return (
        <div>
            <CssBaseline />
            <Global styles={GlobalStyles} />
            <Header fullWidth={fullWidth} />
            {children}
        </div>
    );
}
