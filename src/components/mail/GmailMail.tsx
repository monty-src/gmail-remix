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
  GmailMailBodyTitle,
  GmailMailContainer,
  GmailMailToolsLeft,
  GmailMailToolsRight,
  GmailMailBodyHeader,
  GmailMailBodyMessage,
} from "../../styles/mail";
import { useAppSelector } from "../../store/hooks";
import { selectedMail } from "../../store/mail/selectors/selectedMail";

/**
 * Gmail Email List
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMail = () => {
  const mail = useAppSelector(selectedMail);
  /** Use navigate from react-router-dom */
  const navigate = useNavigate();

  console.log("mail: ", mail);

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
          <h2>{mail.subject}</h2>
          <LabelImportantIcon color="#e8ab02" />
          <p>{mail.title}</p>
          <GmailMailBodyTitle>{mail.time}</GmailMailBodyTitle>
        </GmailMailBodyHeader>
        <GmailMailBodyMessage>{mail.description}</GmailMailBodyMessage>
      </GmailMailBody>
    </GmailMailContainer>
  );
};
