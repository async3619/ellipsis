import React from "react";
import { Select } from "ui";

import { Paper } from "@mui/material";

import { useEditor } from "@components/Editor/Provider.context";
import { Root } from "@components/Editor/Toolbar.styles";

import { LanguageType } from "@utils/types";

export interface EditorToolbarProps {}

export function EditorToolbar({}: EditorToolbarProps) {
    const { setLanguage, language } = useEditor();

    return (
        <Paper elevation={0}>
            <Root>
                <Select<LanguageType>
                    value={language}
                    onChange={setLanguage}
                    items={[
                        { label: "C", value: "c" },
                        { label: "C++", value: "cpp" },
                        { label: "JavaScript", value: "javascript" },
                        { label: "TypeScript", value: "typescript" },
                        { label: "Python", value: "python" },
                        { label: "Java", value: "java" },
                        { label: "kotlin", value: "kotlin" },
                        { label: "Rust", value: "rust" },
                    ]}
                />
            </Root>
        </Paper>
    );
}
