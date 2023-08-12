/* eslint-disable react/no-children-prop */
import React from "react";
import ReactMarkdown, { Components } from "react-markdown";

import { Box, Grid, Stack, Typography } from "@mui/material";

import { Body, Code, Example, Header, Root } from "@components/Problem/View.styles";

import { Problem } from "@utils/types";

export interface ProblemViewProps {
    problem: Problem;
}

const COMPONENT_RENDERERS: Components = {
    p: props => <Typography {...props} fontSize="0.95rem" sx={{ mb: 2 }} />,
    code: props => <Code {...props} />,
};

export function ProblemView({ problem }: ProblemViewProps) {
    return (
        <Root>
            <Header>
                <Typography variant="h4" component="h1" fontSize="1.25rem" fontWeight={600}>
                    {problem.title}
                </Typography>
            </Header>
            <Body>
                <Stack spacing={2}>
                    {typeof problem.description === "string" && (
                        <ReactMarkdown children={problem.description} components={COMPONENT_RENDERERS} />
                    )}
                    {Array.isArray(problem.description) &&
                        problem.description.map(([title, description]) => (
                            <Box key={title}>
                                <Typography variant="h5" fontSize="1rem" fontWeight={600} sx={{ mb: 1 }}>
                                    {title}
                                </Typography>
                                <ReactMarkdown children={description} components={COMPONENT_RENDERERS} />
                            </Box>
                        ))}
                </Stack>
            </Body>
            <Stack>
                <Grid container spacing={2}>
                    {problem.testCases.map(({ input, output }, index) => (
                        <React.Fragment key={input}>
                            <Grid item xs={6}>
                                <Typography variant="h5" fontSize="1rem" fontWeight={600} sx={{ mb: 1 }}>
                                    예제 입력 {index + 1}
                                </Typography>
                                <Example>{input}</Example>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h5" fontSize="1rem" fontWeight={600} sx={{ mb: 1 }}>
                                    예제 출력 {index + 1}
                                </Typography>
                                <Example>{output}</Example>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Stack>
        </Root>
    );
}
