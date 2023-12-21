/**
 * store/mail/actions/selectMail
 *
 *
 */
import { Draft, PayloadAction } from "@reduxjs/toolkit";

/**
 * Select Mail
 *
 *
 * @param {Draft<{ selectMail: boolean; }>} state
 * @returns {void}
 */
export const selectMail = (
  state: Draft<{
    selectMail: {
      id?: string;
      title?: string;
      subject?: string;
      description?: string;
      time?: string;
    };
  }>,
  action: PayloadAction<{
    id?: string;
    title?: string;
    subject?: string;
    description?: string;
    time?: string;
  }>
): void => {
  state.selectMail = action.payload;
};
