/**
 * components/icons/GmailEmailList
 *
 *
 */
import { useEffect, useState } from "react";

import { Checkbox } from "@mui/material";
import {
  DocumentData,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

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
} from "../../styles/email";
import { GmailEmailRows } from "./GmailEmailRows";
import { db } from "../../firebase";

interface Email {
  id: string;
  data: DocumentData;
}

/**
 * Gmail Email List
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailList = () => {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    const collectionEmails = collection(db, "emails");
    const queryEmails = query(collectionEmails, orderBy("timestamp", "desc"));
    onSnapshot(queryEmails, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
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
      <GmailEmailRows />
    </GmailEmailListContainer>
  );
};
