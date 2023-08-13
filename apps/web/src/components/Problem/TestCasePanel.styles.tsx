import { TextArea } from "ui";

import styled from "@emotion/styled";

export const Root = styled.div`
    margin: 0;
    padding: ${({ theme }) => theme.spacing(2)};
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const TestCaseInput = styled(TextArea)`
    padding: ${({ theme }) => theme.spacing(1, 1.25)};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;

    font-family: "Consolas", "Courier New", monospace;

    background-color: #000a200d;
`;

export const Container = styled.div`
    margin: ${({ theme }) => theme.spacing(2, 0, 1)};

    display: flex;
    align-items: center;

    flex-wrap: wrap;
`;
