/**
 * components/sidebar/GmailSidebarOptions
 *
 *
 */
import {
  AccessTime,
  ExpandMore,
  Inbox,
  NearMe,
  Note,
  Star,
} from "@mui/icons-material";
import { GmailSidebarOption } from "./GmailSidebarOption";
import { GmailSidebarOptionsContainer } from "../../styles/sidebar";

/**
 * Gmail Sidebar Options
 *
 *
 * @param {any} props
 * @returns {JSX.Element}
 */
export const GmailSidebarOptions = (props: {}): JSX.Element => {
  return (
    <GmailSidebarOptionsContainer>
      <GmailSidebarOption Icon={Inbox} title="Inbox" number={54} selected />
      <GmailSidebarOption Icon={Star} title="Snoozed" number={22} />
      <GmailSidebarOption Icon={AccessTime} title="Important" number={22} />
      <GmailSidebarOption Icon={NearMe} title="Sent" number={22} />
      <GmailSidebarOption Icon={Note} title="Drafts" number={22} />
      <GmailSidebarOption Icon={ExpandMore} title="More" number={22} />
    </GmailSidebarOptionsContainer>
  );
};
