export type LanguageType = "javascript" | "typescript" | "python" | "c" | "cpp" | "java" | "kotlin" | "rust";
export type Nullable<T> = T | null | undefined;

export interface TestCase {
    id?: string;
    input: string;
    output: string;
}

export interface Problem {
    title: string;
    content: string;
}
