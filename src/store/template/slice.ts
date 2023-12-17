/**
 * src/store/template/slice
 *
 *
 */
import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

/** Export actions */
export const {} = siteSlice.actions;

/** Export reducers */
export default siteSlice.reducer;
