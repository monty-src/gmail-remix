/**
 * src/store/template/slice
 *
 *
 */
import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./actions/actions";

/**
 * Initial state
 *
 *
 * @type {SiteInitialState}
 */
const initialState: {} = {};

/** Create site slice */
export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: actions,
});

/** Export actions */
export const { setTemplate } = siteSlice.actions;

/** Export reducers */
export const templateSlice = siteSlice.reducer;
