import styled from "@emotion/styled";
import { alpha, ButtonBase } from "@mui/material";

export const Root = styled(ButtonBase)`
    min-width: ${({ theme }) => theme.spacing(8)};

    margin: 0;
    padding: ${({ theme }) => theme.spacing(0.5, 0, 0.5, 0.75)};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;

    display: flex;

    color: ${({ theme }) => alpha(theme.palette.text.primary, 0.75)};

    transition: ${({ theme }) =>
        theme.transitions.create(["color", "background-color", "box-shadow"], {
            duration: theme.transitions.duration.shortest,
        })};

    &:hover {
        color: ${({ theme }) => theme.palette.text.primary};
        background-color: ${({ theme }) => theme.palette.action.hover};
    }

    &:active {
        background-color: ${({ theme }) => theme.palette.action.selected};
    }

    &:focus-visible {
        color: ${({ theme }) => theme.palette.text.primary};
        box-shadow: 0 0 0 ${({ theme }) => theme.spacing(0.25)} ${({ theme }) => alpha(theme.palette.primary.main, 0.5)};
    }
`;
