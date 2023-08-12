import styled from "@emotion/styled";
import { alpha, Button as MuiButton, darken } from "@mui/material";

export const Button = styled(MuiButton)`
    padding: ${({ theme }) => theme.spacing(1, 1.25)};

    line-height: 1;

    &:focus-visible {
        box-shadow: 0 0 0 ${({ theme }) => theme.spacing(0.25)} ${({ theme }) => alpha(theme.palette.primary.main, 0.5)};
    }

    &:active {
        background: ${({ theme, variant }) => {
            if ((variant || "contained") === "contained") {
                return darken(theme.palette.primary.main, 0.25);
            }

            return alpha(theme.palette.primary.main, 0.125);
        }};
    }
`;
