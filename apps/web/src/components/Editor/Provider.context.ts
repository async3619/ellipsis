import React from "react";
import { LanguageType } from "@utils/types";

export interface EditorContextValues {
    language: LanguageType;
    setLanguage(language: LanguageType): void;
}

export const EditorContext = React.createContext<EditorContextValues | null>(null);

export function useEditor() {
    const context = React.useContext(EditorContext);
    if (!context) {
        throw new Error("useEditor must be used within a <EditorProvider />");
    }

    return context;
}
