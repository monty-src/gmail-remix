/**
 * components/sidebar/GmailSidebar
 *
 *
 */
import { useAppDispatch } from "../../store/hooks";
import { openSendMessage } from "../../store/mail/slice";

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
  const dispatch = useAppDispatch();
  const handleComposeButton = () => dispatch(openSendMessage());

  return (
    <GmailSidebarContainer>
      <GmailComposeButton handleClick={handleComposeButton} />
      <GmailSidebarOptions />
      <GmailSidebarFooter />
    </GmailSidebarContainer>
  );
};
