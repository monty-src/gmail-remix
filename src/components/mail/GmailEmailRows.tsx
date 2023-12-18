/**
 * components/mail/GmailEmailRowss
 *
 *
 */
import { GmailEmailRow } from "./GmailEmailRow";

import { GmailEmailRowsContainer } from "../../styles/email";

/**
 * Gmail Email List
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailRows = () => {
  return (
    <GmailEmailRowsContainer>
      <GmailEmailRow
        title="Twitch"
        subject="Hey fellow streamer"
        description="This is a test"
        time="10 pm"
      />
      <GmailEmailRow
        title="Twitch"
        subject="Hey fellow streamer"
        description="This is a test"
        time="10 pm"
      />
    </GmailEmailRowsContainer>
  );
};
