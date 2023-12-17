/**
 * components/Search/Search
 *
 *
 */
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { GmailSearchInput, GmailSearchContainer } from "../../styles/styles";

/**
 * Search
 *
 *
 * @param {} props
 * @returns {JSX.Element}
 */
export const Search = (props: any): JSX.Element => {
  return (
    <GmailSearchContainer>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <GmailSearchInput placeholder="Search mail" type="text" />
      <ArrowDropDownIcon />
    </GmailSearchContainer>
  );
};
