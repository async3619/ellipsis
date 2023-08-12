import { PanelResizeHandle } from "react-resizable-panels";

import styled from "@emotion/styled";
import { alpha } from "@mui/material";

export const PanelHandle = styled(PanelResizeHandle)`
    width: ${({ theme }) => theme.spacing(1)};

    &:hover {
        background-color: ${({ theme }) => alpha(theme.palette.primary.light, 0.25)};
    }
`;
