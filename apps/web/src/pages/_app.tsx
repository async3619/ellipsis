import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";

import Layout from "@components/Layout";

import { theme } from "@styles/theme";
import { PageProps } from "@utils/routes/types";

export default function App({ Component, pageProps }: AppProps<PageProps>) {
    return (
        <ThemeProvider theme={theme}>
            <Layout fullScreen={pageProps.fullScreen}>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
