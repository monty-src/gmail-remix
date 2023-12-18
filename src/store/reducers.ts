/**
 * src/store/template/reducers
 *
 *
 */
import { combineReducers } from "@reduxjs/toolkit";

import { mailSlice } from "../store/mail/slice";
import { templateSlice } from "../store/template/slice";

/** Combine reducers */
export const reducers = combineReducers({
  mail: mailSlice,
  template: templateSlice,
});

/** @type Root state */
export type RootState = ReturnType<typeof reducers>;
