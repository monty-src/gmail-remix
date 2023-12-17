/**
 * components/Header/Header
 *
 *
 */
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";


import { Search } from "../search/Search";

import {
  GmailLogo,
  GmailHeaderLeft,
  GmailHeaderRight,
  GmailHeaderMiddle,
  GmailHeaderContainer,
} from "../../styles/styles";

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
      <GmailHeaderMiddle>
        <Search />
      </GmailHeaderMiddle>
      <GmailHeaderRight>
        <IconButton>
          <AppsIcon />
        </IconButton>
      </GmailHeaderRight>
    </GmailHeaderContainer>
  );
};
