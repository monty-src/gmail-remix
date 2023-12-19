/**
 * store/mail/selectors/selectSendMessageIsOpen
 *
 *
 */
import { RootState } from "../../reducers";

/**
 * Select Message Is Open
 *
 *
 * @returns {boolean}
 */
export const selectSendMessageIsOpen = (state: RootState): boolean =>
  state.mail.sendMessageIsOpen;
