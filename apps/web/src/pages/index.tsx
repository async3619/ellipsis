import React from "react";

import { Box } from "@mui/material";
import Editor from "@monaco-editor/react";

import { Panel } from "@components/Panel";
import { PanelLayout } from "@components/Panel/Layout";
import { PanelHandle } from "@components/Panel/Handle";
import { ProblemView } from "@components/Problem/View";
import { ProblemToolbar } from "@components/Problem/Toolbar";
import { FillContent } from "@components/FillContent";
import { EditorToolbar } from "@components/Editor/Toolbar";
import { EditorProvider } from "@components/Editor/Provider";

import { MOCK_PROBLEM } from "@constants/problems";

import { installRouteMiddleware } from "@utils/routes/middleware";
import { Problem } from "@utils/types";
import { ProblemProvider } from "@components/Problem/Provider";

const options: React.ComponentProps<typeof Editor>["options"] = {
    wordWrap: "on",
    scrollBeyondLastLine: false,
    minimap: {
        enabled: false,
    },
    padding: {
        top: 8,
        bottom: 8,
    },
    scrollbar: {
        useShadows: false,
    },
};

export default function Home() {
    const [sourceCode, setSourceCode] = React.useState("");
    const [problem] = React.useState<Problem>(MOCK_PROBLEM);

    const handleChange = React.useCallback((value: string) => {
        setSourceCode(value);
    }, []);

    const handleClear = React.useCallback(() => {
        setSourceCode("");
    }, []);

    const handleTest = React.useCallback(() => {}, []);
    const handleSubmit = React.useCallback(() => {}, []);

    const handleLanguageChange = React.useCallback(() => {
        handleClear();
    }, [handleClear]);

    React.useEffect(() => {
        handleClear();
    }, [handleClear]);

    return (
        <ProblemProvider problem={problem}>
            <EditorProvider onLanguageChange={handleLanguageChange}>
                {({ language }) => (
                    <Box height="100%" p={1}>
                        <PanelLayout>
                            <Panel minSize={40}>
                                <ProblemView problem={problem} />
                            </Panel>
                            <PanelHandle />
                            <Panel withoutPaper minSize={40}>
                                <Box height="100%" display="flex" flexDirection="column">
                                    <EditorToolbar />
                                    <FillContent mt={1} mb={1} flex="1 1 auto">
                                        <Editor
                                            language={language}
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
                )}
            </EditorProvider>
        </ProblemProvider>
    );
}

export const getServerSideProps = installRouteMiddleware({
    fullScreen: true,
})(async () => ({ props: {} }));
