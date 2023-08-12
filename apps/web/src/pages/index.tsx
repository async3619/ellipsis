import { Box } from "@mui/material";

import { Panel } from "@components/Panel";
import { PanelLayout } from "@components/Panel/Layout";
import { PanelHandle } from "@components/Panel/Handle";

import { installRouteMiddleware } from "@utils/routes/middleware";

export default function Home() {
    return (
        <Box height="100%" p={1}>
            <PanelLayout>
                <Panel></Panel>
                <PanelHandle />
                <Panel></Panel>
            </PanelLayout>
        </Box>
    );
}

export const getServerSideProps = installRouteMiddleware({
    fullScreen: true,
})(async () => ({ props: {} }));
