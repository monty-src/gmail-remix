/**
 * components/icons/GmailEmailSection
 *
 *
 */
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  GmailEmailRowTime,
  GmailEmailRowTitle,
  GmailEmailRowMessage,
  GmailEmailRowOptions,
  GmailEmailRowContainer,
  GmailEmailRowDescription,
} from "../../styles/email";

import { StarBorderOutlinedIcon } from "../icons/StarBorderOutlinedIcon";
import { LabelImportantOutlinedIcon } from "../icons/LabelImportantOutlinedIcon";
import { useAppDispatch } from "../../store/hooks";
import { selectMail } from "../../store/mail/slice";

/**
 * Gmail Email List
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailRow = ({
  id,
  title,
  subject,
  time,
  description,
}: any): JSX.Element => {
  const dispatch = useAppDispatch();
  /** Use navigate from react-router-dom */
  const navigate = useNavigate();

  /**
   * Handle Navigating to Mail
   *
   *
   * @returns {void}
   */
  const handleNavigatingToMail = (): void => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <GmailEmailRowContainer onClick={handleNavigatingToMail}>
      <GmailEmailRowOptions>
        <Checkbox />
        <StarBorderOutlinedIcon />
        <LabelImportantOutlinedIcon />
      </GmailEmailRowOptions>
      <GmailEmailRowTitle>{title}</GmailEmailRowTitle>
      <GmailEmailRowMessage>
        <h4>
          {subject}
          <GmailEmailRowDescription> - {description}</GmailEmailRowDescription>
        </h4>
      </GmailEmailRowMessage>
      <GmailEmailRowTime>{time}</GmailEmailRowTime>
    </GmailEmailRowContainer>
  );
};
