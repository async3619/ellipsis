import { configureStore } from "@reduxjs/toolkit";
import { problemApi } from "@stores/problem";

export const store = configureStore({
    reducer: {
        [problemApi.reducerPath]: problemApi.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(problemApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
