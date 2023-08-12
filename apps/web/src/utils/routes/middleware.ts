import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

import { PageProps } from "@utils/routes/types";

interface RouteMiddlewareClientOptions {}

interface RouteMiddlewareOptions {
    title?: string;
    fullWidth?: boolean;
}

export type RouteMiddlewareClient<
    T,
    Params extends ParsedUrlQuery = ParsedUrlQuery,
    Preview extends PreviewData = PreviewData,
> = (
    context: GetServerSidePropsContext<Params, Preview>,
    options: RouteMiddlewareClientOptions,
) => Promise<GetServerSidePropsResult<T>>;

export function installRouteMiddleware<T extends PageProps>(options: RouteMiddlewareOptions = {}) {
    const { title, fullWidth } = options;

    return (origin: RouteMiddlewareClient<Omit<T, "title" | "fullWidth"> & PageProps>): GetServerSideProps<T> => {
        return async context => {
            const data = await origin(context, {});

            if ("props" in data) {
                const props = await data.props;

                return {
                    props: {
                        ...data.props,
                        title: title ?? props.title ?? null,
                        fullWidth: fullWidth ?? props.fullWidth ?? false,
                    } as T,
                };
            }

            return data;
        };
    };
}
