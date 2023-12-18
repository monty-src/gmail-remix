/**
 * components/sidebar/GmailSidebarFooter
 *
 *
 */
import { DuoIcon } from "../icons/DuoIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { PersonIcon } from "../icons/PersonIcon";

import {
  GmailSidebarFooterIcons,
  GmailSidebarFooterContainer,
} from "../../styles/sidebar";

/**
 * Gmail Sidebar Footer
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSidebarFooter = (): JSX.Element => {
  return (
    <GmailSidebarFooterContainer>
      <GmailSidebarFooterIcons>
        <PersonIcon />
        <DuoIcon />
        <PhoneIcon />
      </GmailSidebarFooterIcons>
    </GmailSidebarFooterContainer>
  );
};
