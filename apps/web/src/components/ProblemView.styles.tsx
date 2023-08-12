import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const Root = styled.div`
    margin: 0;
    padding: ${({ theme }) => theme.spacing(2)};
`;

export const Header = styled.div`
    margin: ${({ theme }) => theme.spacing(0, 0, 2)};
`;

export const Body = styled.div`
    margin: ${({ theme }) => theme.spacing(0, 0, 8)};
`;

export const ExampleContainer = styled(Stack)``;

export const Example = styled.pre`
    margin: ${({ theme }) => theme.spacing(1, 0, 0)};
    padding: ${({ theme }) => theme.spacing(1.5)};
    border-radius: ${({ theme }) => theme.spacing(0.5)};

    font-family: "Consolas", monospace;
    font-size: 0.875rem;
    line-height: 1.25rem;
    white-space: pre-wrap;

    color: #262626bf;
    background-color: #000a2008;
`;

export const Code = styled.code`
    padding: ${({ theme }) => theme.spacing(0.25)};
    border: 1px solid #0000000d;

    font-family: "Consolas", monospace;

    color: #262626bf;
    background-color: #000a2008;
`;
