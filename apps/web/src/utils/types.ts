export type LanguageType = "javascript" | "typescript" | "python" | "c" | "cpp" | "java" | "kotlin" | "rust";

export interface TestCase {
    input: string;
    output: string;
}

export interface Problem {
    title: string;
    description: string | [string, string][];
    testCases: TestCase[];
    constraints: string[];
}
