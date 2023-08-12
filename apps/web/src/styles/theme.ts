import localFont from "next/font/local";
import { createTheme } from "@mui/material";

const pretendard = localFont({
    src: "./pretendard.woff2",
});

export const theme = createTheme({
    palette: {
        text: {
            primary: "#262626",
        },
    },
    typography: {
        fontFamily: [pretendard.style.fontFamily, "sans-serif"].join(", "),
    },
});
