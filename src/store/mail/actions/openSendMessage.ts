/**
 * src/store/mail/actions/openSendMessage
 *
 *
 */
import { Draft } from "@reduxjs/toolkit";

/**
 * Open Send Message
 *
 *
 * @param {Draft<{ sendMessageIsOpen: boolean; }>} state
 * @returns {void}
 */
export const openSendMessage = (
  state: Draft<{ sendMessageIsOpen: boolean }>
): void => {
  state.sendMessageIsOpen = true;
};
