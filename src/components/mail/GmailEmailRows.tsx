/**
 * components/mail/GmailEmailRowss
 *
 *
 */
import { useEffect, useState } from "react";

import {
  query,
  orderBy,
  onSnapshot,
  collection,
  DocumentData,
} from "firebase/firestore";

import { db } from "../../firebase";
import { GmailEmailRow } from "./GmailEmailRow";

import { GmailEmailRowsContainer } from "../../styles/email";

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
export const GmailEmailRows = () => {
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
    <GmailEmailRowsContainer>
      {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
        <GmailEmailRow
          id={id}
          key={id}
          title={to}
          subject={subject}
          message={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}
        />
      ))}
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
      <GmailEmailRow
        title="Twitch"
        subject="Hey fellow streamer"
        description="This is a test"
        time="10 pm"
      />
    </GmailEmailRowsContainer>
  );
};
