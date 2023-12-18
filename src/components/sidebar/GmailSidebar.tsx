/**
 * components/sidebar/GmailSidebar
 *
 *
 */
import { GmailSidebarFooter } from "./GmailSidebarFooter";
import { GmailComposeButton } from "./GmailComposeButton";
import { GmailSidebarOptions } from "./GmailSidebarOptions";

import { GmailSidebarContainer } from "../../styles/sidebar";

/**
 * Gmail Sidebar
 *
 *
 * @param {any} props
 * @returns {JSX.Element}
 **/
export const GmailSidebar = (props: any): JSX.Element => {
  return (
    <GmailSidebarContainer>
      <GmailComposeButton />
      <GmailSidebarOptions />
      <GmailSidebarFooter />
    </GmailSidebarContainer>
  );
};
