/* eslint-disable react/no-children-prop */
import React from "react";
import ReactMarkdown, { Components } from "react-markdown";

import { Typography } from "@mui/material";

import { Body, Code, Example, ExampleContainer, Header, Root } from "@components/ProblemView.styles";

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
            <ExampleContainer spacing={4}>
                {problem.testCases.map((testCase, index) => {
                    return (
                        <div key={+index}>
                            <Typography fontSize="1rem" fontWeight={600}>
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
            </ExampleContainer>
        </Root>
    );
}
