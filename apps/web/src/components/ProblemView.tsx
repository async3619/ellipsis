/* eslint-disable react/no-children-prop */
import React from "react";
import ReactMarkdown, { Components } from "react-markdown";

import { Stack, Typography } from "@mui/material";

import { Body, Code, ConstraintList, Constraints, Example, Header, Root } from "@components/ProblemView.styles";

import { Problem } from "@utils/types";

export interface ProblemViewProps {
    problem: Problem;
}

const COMPONENT_RENDERERS: Components = {
    p: props => <Typography {...props} fontSize="0.95rem" />,
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
                <ReactMarkdown children={problem.description} components={COMPONENT_RENDERERS} />
            </Body>
            <Stack spacing={4}>
                {problem.testCases.map((testCase, index) => {
                    return (
                        <div key={+index}>
                            <Typography fontSize="0.9rem" fontWeight={600}>
                                Example {index}:
                            </Typography>
                            <Example>
                                <strong>Input:</strong> {testCase.input}
                                <br />
                                <strong>Output:</strong> {testCase.output}
                                <br />
                                <strong>Explanation:</strong> {testCase.explanation}
                            </Example>
                        </div>
                    );
                })}
                <Constraints>
                    <Typography fontSize="0.9rem" fontWeight={600} sx={{ mb: 1 }}>
                        Constraints:
                    </Typography>
                    <ConstraintList>
                        {problem.constraints.map((constraint, index) => (
                            <li key={+index}>
                                <ReactMarkdown children={constraint} components={COMPONENT_RENDERERS} />
                            </li>
                        ))}
                    </ConstraintList>
                </Constraints>
            </Stack>
        </Root>
    );
}
