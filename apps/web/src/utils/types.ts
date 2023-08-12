export type LanguageType = "javascript" | "typescript" | "python" | "c" | "cpp" | "java" | "kotlin" | "rust";

export interface TestCase {
    input: string;
    output: string;
    explanation: string;
}

export interface Problem {
    title: string;
    description: string;
    testCases: TestCase[];
    constraints: string[];
    initialCode: Partial<Record<LanguageType, string>>;
}
