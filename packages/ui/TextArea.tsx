import styled from "@emotion/styled";
import { alpha, InputBase, InputBaseProps } from "@mui/material";

export type TextAreaProps = InputBaseProps;

export const TextArea = styled(InputBase)`
    transition: ${({ theme }) =>
        theme.transitions.create(["box-shadow"], {
            duration: theme.transitions.duration.shortest,
        })};

    &:focus-within {
        box-shadow: 0 0 0 ${({ theme }) => theme.spacing(0.25)} ${({ theme }) => alpha(theme.palette.primary.main, 0.5)};
    }
`;
