/**
 * store/mail/selectors/selectedMail
 *
 *
 */
import { RootState } from "../../reducers";
import { MailInitialState } from "../slice";

/**
 * Select Mail
 *
 *
 * @returns {MailInitialState}
 */
export const selectedMail = (
  state: RootState
): MailInitialState["selectMail"] => state.mail.selectMail;
