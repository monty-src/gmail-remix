/**
 * src/store/template/store
 *
 *
 */
import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "./reducers";

/**
 * Store
 *
 *
 * @decription Create redux store
 */
export const store = configureStore({ reducer: reducers });

/** @type Root state */
export type RootState = ReturnType<typeof store.getState>;

/** @type App dispatch */
export type AppDispatch = typeof store.dispatch;
