import React from "react";
import { nanoid } from "nanoid";

import { ProblemContext, ProblemContextValues } from "@components/Problem/Provider.context";

import { Nullable, Problem, TestCase } from "@utils/types";

export interface ProblemProviderProps {
    problem: Nullable<Problem>;
}

export function ProblemProvider({ problem, children }: React.PropsWithChildren<ProblemProviderProps>) {
    const [testCases, setTestCases] = React.useState<TestCase[]>([]);
    const addTestCase = React.useCallback(() => {
        setTestCases(testCases => [...testCases, { id: nanoid(), input: "", output: "" }]);
    }, []);

    const deleteTestCase = React.useCallback((id: string) => {
        setTestCases(testCases => testCases.filter(testCase => testCase.id !== id));
    }, []);

    const updateTestCase = React.useCallback((id: string, data: Omit<TestCase, "id">) => {
        setTestCases(testCases =>
            testCases.map(testCase => (testCase.id === id ? { ...testCase, ...data } : testCase)),
        );
    }, []);

    const resetTestCases = React.useCallback(() => {
        setTestCases([]);
    }, []);

    const contextValue = React.useMemo<ProblemContextValues>(
        () => ({ problem, testCases, setTestCases, addTestCase, deleteTestCase, updateTestCase, resetTestCases }),
        [problem, testCases, addTestCase, deleteTestCase, updateTestCase, resetTestCases],
    );

    return <ProblemContext.Provider value={contextValue}>{children}</ProblemContext.Provider>;
}
