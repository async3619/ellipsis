import React from "react";

import { Problem, TestCase } from "@utils/types";

export interface ProblemContextValues {
    problem: Problem;
    testCases: TestCase[];
    addTestCase(): void;
    deleteTestCase(id: string): void;
    updateTestCase(id: string, data: Partial<Omit<TestCase, "id">>): void;
    resetTestCases(): void;
}

export const ProblemContext = React.createContext<ProblemContextValues | null>(null);

export function useProblem() {
    const context = React.useContext(ProblemContext);
    if (context === null) {
        throw new Error("useProblem must be used within a <ProblemProvider />");
    }

    return context;
}
