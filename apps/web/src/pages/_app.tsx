import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";

import Layout from "@components/Layout";

import { theme } from "@styles/theme";
import { PageProps } from "@utils/routes/types";

import { store } from "../stores";

export default function App({ Component, pageProps }: AppProps<PageProps>) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Layout fullScreen={pageProps.fullScreen}>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
}
