import styled from "@emotion/styled";

import { Logo } from "@components/Logo";

export const Root = styled.header`
    height: ${({ theme }) => theme.spacing(6.25)};

    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
`;

export const LogoIcon = styled(Logo)`
    width: ${({ theme }) => theme.spacing(3.5)};
    height: ${({ theme }) => theme.spacing(3.5)};

    display: block;
`;
