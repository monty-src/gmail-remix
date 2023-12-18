/**
 * components/icons/GmailEmailList
 *
 *
 */
import { Checkbox } from "@mui/material";

import { RedoIcon } from "../icons/RedoIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import { MoreVertIcon } from "../icons/MoreVertIcon";
import { ChevronLeftIcon } from "../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { KeyboardHideIcon } from "../icons/KeyboardHideIcon";
import { ArrowDropDownIcon } from "../icons/ArrowDropDownIcon";

import { GmailEmailSections } from "./GmailEmailSections";


import {
  GmailEmailListSettings,
  GmailEmailListContainer,
  GmailEmailListSettingsLeft,
  GmailEmailListSettingsRight,
} from "../../styles/mail";

/**
 * Gmail Email List
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailList = () => (
  <GmailEmailListContainer>
    <GmailEmailListSettings>
      <GmailEmailListSettingsLeft>
        <Checkbox />
        <ArrowDropDownIcon />
        <RedoIcon />
        <MoreVertIcon />
      </GmailEmailListSettingsLeft>
      <GmailEmailListSettingsRight>
        <ChevronLeftIcon />
        <ChevronRightIcon />
        <KeyboardHideIcon />
        <SettingsIcon />
      </GmailEmailListSettingsRight>
    </GmailEmailListSettings>
    <GmailEmailSections />
  </GmailEmailListContainer>
);
