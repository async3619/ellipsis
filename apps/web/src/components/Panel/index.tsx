import React from "react";
import { PanelProps } from "react-resizable-panels";

import { Content, Root } from "@components/Panel/index.styles";

interface Props extends PanelProps {
    withoutPaper?: boolean;
}

export function Panel({ children, withoutPaper, ...rest }: React.PropsWithChildren<Props>) {
    return (
        <Root {...rest}>
            {!withoutPaper && <Content sx={{ height: "100%" }}>{children}</Content>}
            {withoutPaper && children}
        </Root>
    );
}
