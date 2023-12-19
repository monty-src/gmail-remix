/**
 * store/mail/selectors/selectSendMessageIsOpen
 *
 *
 */
import { RootState } from "../../reducers";
import { useAppSelector } from "../../hooks";

/**
 * Select Message Is Open
 *
 *
 * @returns {boolean}
 */
export const selectMessageIsOpen = (): boolean => {
  return useAppSelector((state: RootState) => state.mail.sendMessageIsOpen);
};
