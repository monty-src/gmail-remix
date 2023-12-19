/**
 * src/store/mail/actions/closeSendMessage
 *
 *
 */
import { Draft } from "@reduxjs/toolkit";

/**
 * Close Send Message
 *
 *
 * @param {Draft<{ sendMessageIsOpen: boolean }>} state
 * @returns {void}
 */
export const closeSendMessage = (
  state: Draft<{ sendMessageIsOpen: boolean }>
) => {
  state.sendMessageIsOpen = false;
};
