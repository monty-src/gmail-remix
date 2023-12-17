/**
 * components/sidebar/GmailSidebarOptions
 *
 *
 */

import { Inbox } from "@mui/icons-material";
import { GmailSidebarOptionsContainer } from "../../styles/sidebar";
import { GmailSidebarOption } from "./GmailSidebarOption";

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
      <GmailSidebarOption Icon={Inbox} title="Inbox" number={54} />
    </GmailSidebarOptionsContainer>
  );
};
