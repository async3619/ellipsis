import { Panel } from "react-resizable-panels";

import { Paper } from "@mui/material";
import styled from "@emotion/styled";

export const Root = styled(Panel)`
    max-height: 100%;

    position: relative;
`;

export const Content = styled(Paper)`
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    overflow-y: auto;
`;
