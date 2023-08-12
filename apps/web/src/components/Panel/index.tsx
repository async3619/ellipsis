import React from "react";

import { Paper } from "@mui/material";

import { Root } from "@components/Panel/index.styles";

export interface PanelProps {}

export function Panel({ children }: React.PropsWithChildren<PanelProps>) {
    return (
        <Root>
            <Paper elevation={0} sx={{ height: "100%" }}>
                {children}
            </Paper>
        </Root>
    );
}
