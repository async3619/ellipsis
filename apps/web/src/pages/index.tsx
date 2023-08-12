import { installRouteMiddleware } from "@utils/routes/middleware";

export default function Home() {
    return <></>;
}

export const getServerSideProps = installRouteMiddleware({
    fullWidth: true,
})(async () => ({ props: {} }));
