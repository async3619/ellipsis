import React from "react";
import { Button } from "ui";

import { Box, Paper, Stack } from "@mui/material";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import { TestCasePanel } from "@components/Problem/TestCasePanel";

export interface ProblemToolbarProps {
    onClear?: () => void;
    onTest?: () => void;
    onSubmit?: () => void;
}

export function ProblemToolbar({ onClear, onTest, onSubmit }: ProblemToolbarProps) {
    const [testCasePanelOpen, setTestCasePanelOpen] = React.useState(false);

    return (
        <Paper>
            {testCasePanelOpen && <TestCasePanel />}
            <Box display="flex" p={1}>
                <Button
                    variant="text"
                    color="inherit"
                    onClick={() => setTestCasePanelOpen(prev => !prev)}
                    endIcon={testCasePanelOpen ? <ExpandMoreRoundedIcon /> : <ExpandLessRoundedIcon />}
                >
                    테스트 케이스 관리
                </Button>
                <Box flex="1 1 auto" />
                <Stack direction="row" spacing={1}>
                    <Button variant="text" onClick={onClear}>
                        초기화
                    </Button>
                    <Button variant="outlined" onClick={onTest}>
                        코드 실행
                    </Button>
                    <Button onClick={onSubmit}>제출 및 채점</Button>
                </Stack>
            </Box>
        </Paper>
    );
}
