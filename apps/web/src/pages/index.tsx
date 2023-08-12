import React from "react";

import { Box } from "@mui/material";
import Editor from "@monaco-editor/react";

import { Panel } from "@components/Panel";
import { PanelLayout } from "@components/Panel/Layout";
import { PanelHandle } from "@components/Panel/Handle";
import { ProblemView } from "@components/Problem/View";
import { ProblemToolbar } from "@components/Problem/Toolbar";
import { FillContent } from "@components/FillContent";

import { installRouteMiddleware } from "@utils/routes/middleware";
import { MOCK_PROBLEM } from "@constants/problems";

const options: React.ComponentProps<typeof Editor>["options"] = {
    wordWrap: "on",
    scrollBeyondLastLine: false,
    minimap: {
        enabled: false,
    },
};

export default function Home() {
    const [sourceCode, setSourceCode] = React.useState("");

    const handleChange = React.useCallback((value: string) => {
        setSourceCode(value);
    }, []);

    const handleClear = React.useCallback(() => {
        setSourceCode("");
    }, []);

    React.useEffect(() => {
        handleClear();
    }, [handleClear]);

    const handleTest = React.useCallback(() => {}, []);
    const handleSubmit = React.useCallback(() => {}, []);

    return (
        <Box height="100%" p={1}>
            <PanelLayout>
                <Panel minSize={40}>
                    <ProblemView problem={MOCK_PROBLEM} />
                </Panel>
                <PanelHandle />
                <Panel withoutPaper minSize={40}>
                    <Box height="100%" display="flex" flexDirection="column">
                        <FillContent mb={1} flex="1 1 auto">
                            <Editor
                                defaultLanguage="typescript"
                                options={options}
                                onChange={handleChange}
                                value={sourceCode}
                            />
                        </FillContent>
                        <ProblemToolbar onClear={handleClear} onSubmit={handleSubmit} onTest={handleTest} />
                    </Box>
                </Panel>
            </PanelLayout>
        </Box>
    );
}

export const getServerSideProps = installRouteMiddleware({
    fullScreen: true,
})(async () => ({ props: {} }));
