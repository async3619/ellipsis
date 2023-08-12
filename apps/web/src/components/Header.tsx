import React from "react";
import { AppBar, Container } from "@mui/material";

import { LogoIcon, Root } from "@components/Header.styles";

export interface HeaderProps {
    fullWidth?: boolean;
}

export function Header({ fullWidth }: HeaderProps) {
    const content = (
        <>
            <LogoIcon />
        </>
    );

    return (
        <AppBar elevation={0} position="static" sx={{ background: "#fff" }}>
            <Root>
                <Container maxWidth={fullWidth ? false : undefined}>{content}</Container>
            </Root>
        </AppBar>
    );
}
