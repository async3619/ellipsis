import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyles = css`
    html,
    body {
        background-color: #f0f0f0;
    }
`;

export const FullScreenStyles = css`
    html,
    body,
    #__next {
        height: 100%;
    }
`;

export const Root = styled.div<{ fullScreen: boolean }>`
    height: ${({ fullScreen }) => (fullScreen ? "100%" : "auto")};

    display: flex;
    flex-direction: column;
`;
