/* eslint-disable react/no-children-prop */
import React from "react";
import ReactMarkdown, { Components } from "react-markdown";

import { Skeleton, Typography } from "@mui/material";

import { Body, Code, Header, Root } from "@components/Problem/View.styles";

import { Nullable, Problem } from "@utils/types";

export interface ProblemViewProps {
    problem: Nullable<Problem>;
}

const COMPONENT_RENDERERS: Components = {
    p: props => <Typography {...props} fontSize="0.95rem" sx={{ mb: 2 }} />,
    code: props => <Code {...props} />,
};

export function ProblemView({ problem }: ProblemViewProps) {
    let title: React.ReactNode;
    let content: React.ReactNode;

    if (problem) {
        title = problem.title;
        content = <ReactMarkdown components={COMPONENT_RENDERERS}>{problem.content}</ReactMarkdown>;
    } else {
        title = <Skeleton variant="text" width="100%" />;

        content = (
            <>
                <Typography fontSize="0.95rem" sx={{ mb: 2 }}>
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="50%" />
                </Typography>
                <Typography fontSize="0.95rem" sx={{ mb: 2 }}>
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="50%" />
                </Typography>
                <Typography fontSize="0.95rem" sx={{ mb: 2 }}>
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="50%" />
                </Typography>
                <Typography fontSize="0.95rem" sx={{ mb: 2 }}>
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="50%" />
                </Typography>
            </>
        );
    }

    return (
        <Root>
            <Header>
                <Typography variant="h4" component="h1" fontSize="1.25rem" fontWeight={600}>
                    {title}
                </Typography>
            </Header>
            <Body>{content}</Body>
        </Root>
    );
}
