/**
 * src/store/mail/slice
 *
 *
 */
import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions/actions";

export interface MailInitialState {
  sendMessageIsOpen: boolean;
}

/**
 * Initial state
 *
 *
 * @type {any}
 */
const initialState: MailInitialState = {
  sendMessageIsOpen: false,
};

/** Create mail slice */
export const mail = createSlice({
  name: "mail",
  initialState,
  reducers: actions,
});

/** Export actions */
export const { openSendMessage, closeSendMessage } = mail.actions;

/** Export reducers */
export const mailSlice = mail.reducer;
