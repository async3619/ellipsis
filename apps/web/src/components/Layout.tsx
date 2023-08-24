import React from "react";

import { Box, CssBaseline } from "@mui/material";
import { Global } from "@emotion/react";

import { Header } from "@components/Header";

import { FullScreenStyles, GlobalStyles, Root } from "@components/Layout.styles";

export interface LayoutProps {
    fullScreen?: boolean;
}

export default function Layout({ children, fullScreen = false }: React.PropsWithChildren<LayoutProps>) {
    return (
        <Root fullScreen={fullScreen}>
            <CssBaseline />
            <Global styles={GlobalStyles} />
            {fullScreen && <Global styles={FullScreenStyles} />}
            <Header fullScreen={fullScreen} />
            <Box component="main" flex="1 1 auto">
                {children}
            </Box>
        </Root>
    );
}
