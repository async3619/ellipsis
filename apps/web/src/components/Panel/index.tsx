import React from "react";
import { PanelProps } from "react-resizable-panels";

import { Content, Root } from "@components/Panel/index.styles";

export function Panel({ children, ...rest }: React.PropsWithChildren<PanelProps>) {
    return (
        <Root {...rest}>
            <Content elevation={0} sx={{ height: "100%" }}>
                {children}
            </Content>
        </Root>
    );
}
