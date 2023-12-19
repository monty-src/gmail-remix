/**
 * components/sendmail/GmailSendMail
 *
 *
 */
import { CloseIcon } from "../icons/CloseIcon";

import {
  GmailSendMailForm,
  GmailSendMailInput1,
  GmailSendMailInput2,
  GmailSendMailInput3,
  GmailSendMailHeader,
  GmailSendMailContainer,
  GmailSendMailOptions,
  GmailSendMailSendButton,
} from "../../styles/sendmail";

/**
 * Gmail Send Mail
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMail = () => {
  return (
    <GmailSendMailContainer>
      <GmailSendMailHeader>
        <h3>New Message</h3>
        <CloseIcon color="#808080" />
      </GmailSendMailHeader>
      <GmailSendMailForm>
        <GmailSendMailInput1 />
        <GmailSendMailInput2 />
        <GmailSendMailInput3 />
        <GmailSendMailOptions>
          <GmailSendMailSendButton
            type="submit"
            color="primary"
            variant="contained"
          >
            Send
          </GmailSendMailSendButton>
        </GmailSendMailOptions>
      </GmailSendMailForm>
    </GmailSendMailContainer>
  );
};
