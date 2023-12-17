/**
 * components/search/GmailSearch
 *
 *
 */
import { SearchIcon } from "../icons/SearchIcon";
import { ArrowDropDownIcon } from "../icons/ArrowDropDownIcon";

import { GmailSearchInput, GmailSearchContainer } from "../../styles/search";

/**
 * Gmail Search
 *
 *
 * @param {} props
 * @returns {JSX.Element}
 */
export const GmailSearch = (props: any): JSX.Element => {
  return (
    <GmailSearchContainer>
      <SearchIcon />
      <GmailSearchInput placeholder="Search mail" type="text" />
      <ArrowDropDownIcon />
    </GmailSearchContainer>
  );
};
