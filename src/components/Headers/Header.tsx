/**
 * components/Header/Header
 *
 *
 */

import MenuIcon from "@mui/icons-material/Menu";

import {
  GmailLogo,
  GmailHeaderLeft,
  GmailHeaderRight,
  GmailHeaderMiddle,
  GmailHeaderContainer,
} from "../../styles/styles";
import { IconButton } from "@mui/material";

interface Props {}

/**
 * Header
 *
 *
 * @param {} props
 * @returns {JSX.Element}
 */
export const Header = (props: any): JSX.Element => {
  return (
    <GmailHeaderContainer>
      <GmailHeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <GmailLogo src="/images/gmail-logo.png" />
      </GmailHeaderLeft>
      <GmailHeaderMiddle></GmailHeaderMiddle>
      <GmailHeaderRight></GmailHeaderRight>
    </GmailHeaderContainer>
  );
};
