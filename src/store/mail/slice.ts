/**
 * src/store/mail/slice
 *
 *
 */
import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions/actions";

export interface MailInitialState {
  selectMail: {
    id?: string;
    title?: string;
    subject?: string;
    message?: string;
    description?: string;
    time?: string;
  };
  sendMessageIsOpen: boolean;
}

/**
 * Initial state
 *
 *
 * @type {any}
 */
const initialState: MailInitialState = {
  selectMail: {},
  sendMessageIsOpen: false,
};

/** Create mail slice */
export const mail = createSlice({
  name: "mail",
  initialState,
  reducers: actions,
});

/** Export actions */
export const { openSendMessage, closeSendMessage, selectMail } = mail.actions;

/** Export reducers */
export const mailSlice = mail.reducer;
