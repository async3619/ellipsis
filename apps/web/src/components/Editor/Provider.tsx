import React from "react";
import { LanguageType } from "@utils/types";
import { EditorContext, EditorContextValues } from "@components/Editor/Provider.context";

export interface EditorProviderProps {
    children(context: EditorContextValues): React.ReactNode;
    onLanguageChange(language: LanguageType): void;
}

export function EditorProvider({ children, onLanguageChange }: EditorProviderProps) {
    const [language, setLanguage] = React.useState<LanguageType>("typescript");
    const contextValue = React.useMemo<EditorContextValues>(() => ({ language, setLanguage }), [language, setLanguage]);

    React.useEffect(() => {
        onLanguageChange(language);
    }, [language, onLanguageChange]);

    return <EditorContext.Provider value={contextValue}>{children(contextValue)}</EditorContext.Provider>;
}
