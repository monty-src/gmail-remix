/**
 * src/store/template/reducers
 *
 *
 */
import { combineReducers } from "@reduxjs/toolkit";

import { templateSlice } from "../store/template/slice";

/** Combine reducers */
export const reducers = combineReducers({
  template: templateSlice,
});

/** @type Root state */
export type RootState = ReturnType<typeof reducers>;
