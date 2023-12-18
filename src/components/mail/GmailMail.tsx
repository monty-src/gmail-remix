/**
 * components/mail/GmailMail
 *
 *
 */

import { useNavigate } from "react-router-dom";

import { PrintIcon } from "../icons/PrintIcon";
import { EmailIcon } from "../icons/EmailIcon";
import { ErrorIcon } from "../icons/ErrorIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { MoreVertIcon } from "../icons/MoreVertIcon";
import { UnfoldMoreIcon } from "../icons/UnfoldMore";
import { ExitToAppIcon } from "../icons/ExitToAppIcon";
import { CheckCircleIcon } from "../icons/CheckCircle";
import { ArrowBackIcon } from "../icons/ArrowBackIcon";
import { WatchLaterIcon } from "../icons/WatchLaterIcon";
import { MoveToInboxIcon } from "../icons/MoveToInboxIcon";
import { LabelImportantIcon } from "../icons/LabelImportantIcon";

import {
  GmailMailBody,
  GmailMailTools,
  GmailMailContainer,
  GmailMailToolsLeft,
  GmailMailToolsRight,
  GmailMailBodyHeader,
  GmailMailBodyMessage,
} from "../../styles/mail";

/**
 * Gmail Email List
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMail = () => {
  /** Use navigate from react-router-dom */
  const navigate = useNavigate();

  /**
   * Handle Navigating Home
   *
   *
   * @returns {void}
   */
  const handleNavigatingToHome = (): void => navigate("/");

  return (
    <GmailMailContainer>
      <GmailMailTools>
        <GmailMailToolsLeft>
          <ArrowBackIcon handleClick={handleNavigatingToHome} />
          <MoveToInboxIcon />
          <ErrorIcon />
          <DeleteIcon />
          <EmailIcon />
          <WatchLaterIcon />
          <CheckCircleIcon />
          <LabelImportantIcon />
          <MoreVertIcon />
        </GmailMailToolsLeft>
        <GmailMailToolsRight>
          <UnfoldMoreIcon />
          <PrintIcon />
          <ExitToAppIcon />
        </GmailMailToolsRight>
      </GmailMailTools>
      <GmailMailBody>
        <GmailMailBodyHeader>
          <h2>Subject</h2>
          <LabelImportantIcon color="#e8ab02" />
          <p>Title</p>
          <p>10pm</p>
        </GmailMailBodyHeader>
        <GmailMailBodyMessage>This is a message</GmailMailBodyMessage>
      </GmailMailBody>
    </GmailMailContainer>
  );
};
