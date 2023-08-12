import React from "react";
import { Box, BoxProps, Paper } from "@mui/material";

export function FillContent({ children, ...rest }: BoxProps<"div", { component?: "div" }>) {
    return (
        <Box position="relative" {...rest}>
            <Box component={Paper} position="absolute" top={0} left={0} right={0} bottom={0} overflow="hidden">
                {children}
            </Box>
        </Box>
    );
}
