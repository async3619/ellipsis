import React from "react";
import { AppBar, Container } from "@mui/material";

import { LogoIcon, Root } from "@components/Header.styles";

export interface HeaderProps {
    fullScreen?: boolean;
}

export function Header({ fullScreen }: HeaderProps) {
    const content = (
        <>
            <LogoIcon />
        </>
    );

    return (
        <AppBar elevation={0} position="static" sx={{ background: "#fff" }}>
            <Root>
                <Container maxWidth={fullScreen ? false : undefined}>{content}</Container>
            </Root>
        </AppBar>
    );
}
