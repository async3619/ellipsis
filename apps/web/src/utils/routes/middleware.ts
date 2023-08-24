import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

import { PageProps } from "@utils/routes/types";

interface RouteMiddlewareClientOptions {}

interface RouteMiddlewareOptions {
    title?: string;
    fullScreen?: boolean;
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
    const { title, fullScreen } = options;

    return (origin: RouteMiddlewareClient<Omit<T, "title" | "fullScreen"> & PageProps>): GetServerSideProps<T> => {
        return async context => {
            const data = await origin(context, {});

            if ("props" in data) {
                const props = await data.props;

                return {
                    props: {
                        ...data.props,
                        title: title ?? props.title ?? null,
                        fullScreen: fullScreen ?? props.fullScreen ?? false,
                    } as T,
                };
            }

            return data;
        };
    };
}
