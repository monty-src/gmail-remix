/**
 * components/header/GmailHeader
 *
 *
 */
import { MenuIcon } from "../icons/MenuIcon";
import { AppsIcon } from "../icons/AppsIcon";
import { AvatarIcon } from "../icons/AvatarIcon";
import { GmailSearch } from "../search/GmailSearch";
import { NotificationsIcon } from "../icons/NotificationsIcon";

import {
  GmailLogo,
  GmailHeaderLeft,
  GmailHeaderRight,
  GmailHeaderMiddle,
  GmailHeaderContainer,
} from "../../styles/header";

/**
 * Gmail Header
 *
 *
 * @param {any} props
 * @returns {JSX.Element}
 **/
export const GmailHeader = (props: any): JSX.Element => {
  return (
    <GmailHeaderContainer>
      <GmailHeaderLeft>
        <MenuIcon />
        <GmailLogo src="/images/gmail-logo.png" />
      </GmailHeaderLeft>
      <GmailHeaderMiddle>
        <GmailSearch />
      </GmailHeaderMiddle>
      <GmailHeaderRight>
        <AppsIcon />
        <NotificationsIcon />
        <AvatarIcon />
      </GmailHeaderRight>
    </GmailHeaderContainer>
  );
};
