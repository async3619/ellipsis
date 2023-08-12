import React from "react";
import { Box } from "@mui/material";

import Editor from "@monaco-editor/react";

import { Panel } from "@components/Panel";
import { PanelLayout } from "@components/Panel/Layout";
import { PanelHandle } from "@components/Panel/Handle";
import { ProblemView } from "@components/ProblemView";

import { installRouteMiddleware } from "@utils/routes/middleware";
import { Problem } from "@utils/types";

const options: React.ComponentProps<typeof Editor>["options"] = {
    wordWrap: "on",
    scrollBeyondLastLine: false,
    minimap: {
        enabled: false,
    },
};

const MOCK_PROBLEM: Problem = {
    title: "3. Longest Substring Without Repeating Characters",
    description: "Given a string `s`, find the length of the **longest substring** without repeating characters.",
    testCases: [
        { input: "abcabcbb", output: "3", explanation: "The answer is 'abc', with the length of 3." },
        { input: "bbbbb", output: "1", explanation: "The answer is 'b', with the length of 1." },
        { input: "pwwkew", output: "3", explanation: "The answer is 'wke', with the length of 3." },
    ],
    constraints: ["`0 <= s.length <= 5 * 104`", "`s` consists of English letters, digits, symbols and spaces."],
};

export default function Home() {
    return (
        <Box height="100%" p={1}>
            <PanelLayout>
                <Panel minSize={40}>
                    <ProblemView problem={MOCK_PROBLEM} />
                </Panel>
                <PanelHandle />
                <Panel minSize={40}>
                    <Editor defaultLanguage="typescript" options={options} />
                </Panel>
            </PanelLayout>
        </Box>
    );
}

export const getServerSideProps = installRouteMiddleware({
    fullScreen: true,
})(async () => ({ props: {} }));
