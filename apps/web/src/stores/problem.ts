import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Problem } from "@utils/types";

export const problemApi = createApi({
    reducerPath: "problemApi",
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    endpoints: builder => ({
        getProblemById: builder.query<Problem, number>({
            query: id => `/api/problem/${id}`,
        }),
    }),
});

export const { useGetProblemByIdQuery } = problemApi;
