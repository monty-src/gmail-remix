/**
 * src/store/mail/slice
 *
 *
 */
import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions/actions";

/**
 * Initial state
 *
 *
 * @type {any}
 */
const initialState: {} = {};

/** Create mail slice */
export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: actions,
});

/** Export actions */
export const { setTemplate } = mailSlice.actions;

/** Export reducers */
export const templateSlice = mailSlice.reducer;
