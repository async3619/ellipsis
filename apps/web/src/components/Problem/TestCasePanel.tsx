import React from "react";
import { Button, TextAreaProps } from "ui";

import { Box, Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { useProblem } from "@components/Problem/Provider.context";
import { Container, Root, TestCaseInput } from "@components/Problem/TestCasePanel.styles";

const TESTCASE_INPUT_PROPS: TextAreaProps = {
    multiline: true,
    fullWidth: true,
    minRows: 3,
    maxRows: 10,
    spellCheck: "false",
};

export function TestCasePanel() {
    const { testCases, addTestCase, deleteTestCase, updateTestCase, problem, resetTestCases } = useProblem();
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
    const currentTestCase = testCases[selectedIndex];

    const handleFocusedItemChange = React.useCallback((index: number) => {
        setSelectedIndex(index);
    }, []);

    const handleItemDelete = React.useCallback(
        (index: number) => {
            if (!testCases[index].id) {
                return;
            }

            if (index < selectedIndex) {
                setSelectedIndex(selectedIndex - 1);
            } else if (index === selectedIndex) {
                setSelectedIndex(0);
            }

            deleteTestCase(testCases[index].id);
        },
        [deleteTestCase, selectedIndex, testCases],
    );

    const handleInputChange = React.useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            updateTestCase(currentTestCase.id, { input: event.target.value });
        },
        [currentTestCase, updateTestCase],
    );

    const handleOutputChange = React.useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            updateTestCase(currentTestCase.id, { output: event.target.value });
        },
        [currentTestCase, updateTestCase],
    );

    const handleResetClick = React.useCallback(() => {
        setSelectedIndex(0);
        resetTestCases();
    }, [resetTestCases]);

    return (
        <Root>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">테스트 케이스 관리</Typography>
                <Button
                    variant="text"
                    disabled={problem.testCases.length === testCases.length}
                    onClick={handleResetClick}
                >
                    테스트 케이스 초기화
                </Button>
            </Box>
            <Container>
                {testCases.map((item, index) => (
                    <Chip
                        key={item.id || index}
                        label={`Case #${index + 1}`}
                        color={index === selectedIndex ? "primary" : "default"}
                        onClick={() => handleFocusedItemChange(index)}
                        onDelete={item.id ? () => handleItemDelete(index) : undefined}
                        sx={{ mb: 1, mr: 1 }}
                    />
                ))}
                {testCases.length < 25 && (
                    <Tooltip title="커스텀 테스트 케이스 추가">
                        <IconButton size="small" onClick={addTestCase} sx={{ mb: 1 }}>
                            <AddRoundedIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}
            </Container>
            <Stack spacing={2}>
                <Box component="label">
                    <Typography gutterBottom variant="body1" fontWeight={600} color="text.secondary">
                        입력
                    </Typography>
                    <TestCaseInput
                        {...TESTCASE_INPUT_PROPS}
                        readOnly={!currentTestCase.id}
                        value={currentTestCase.input}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box component="label">
                    <Typography gutterBottom variant="body1" fontWeight={600} color="text.secondary">
                        출력
                    </Typography>
                    <TestCaseInput
                        {...TESTCASE_INPUT_PROPS}
                        readOnly={!currentTestCase.id}
                        value={currentTestCase.output}
                        onChange={handleOutputChange}
                    />
                </Box>
            </Stack>
        </Root>
    );
}
