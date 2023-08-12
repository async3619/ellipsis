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
}
