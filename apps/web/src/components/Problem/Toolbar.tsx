import React from "react";
import { Button } from "ui";

import { Box, Paper, Stack } from "@mui/material";

export interface ProblemToolbarProps {
    onClear?: () => void;
    onTest?: () => void;
    onSubmit?: () => void;
}

export function ProblemToolbar({ onClear, onTest, onSubmit }: ProblemToolbarProps) {
    return (
        <Paper sx={{ p: 1, display: "flex" }}>
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
        </Paper>
    );
}
