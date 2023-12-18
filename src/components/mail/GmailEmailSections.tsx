/**
 * components/icons/GmailEmailSection
 *
 *
 */
import { GmailEmailSection } from "./GmailEmailSection";

import { InboxIcon } from "../icons/InboxIcon";
import { PeopleIcon } from "../icons/PeopleIcon";
import { LocalOfferIcon } from "../icons/LocalOfferIcon";

import { GmailEmailSectionsContainer } from "../../styles/email";

/**
 * Gmail Email List
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailSections = () => {
  return (
    <GmailEmailSectionsContainer>
      <GmailEmailSection
        Icon={InboxIcon}
        title="Primary"
        color="#FF0000"
        selected
      />
      <GmailEmailSection Icon={PeopleIcon} title="Social" color="#1A73E8" />
      <GmailEmailSection
        Icon={LocalOfferIcon}
        title="Promotions"
        color="#00FF00"
      />
    </GmailEmailSectionsContainer>
  );
};
