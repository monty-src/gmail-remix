/**
 * components/icons/GmailEmailSection
 *
 *
 */

import { GmailEmailSectionContainer } from "../../styles/email";

interface GmailEmailSectionProps {
  title: string;
  color: string;
  selected?: boolean;
  Icon: () => JSX.Element;
}

/**
 * Gmail Email List
 *
 *
 * @param {GmailEmailSectionProps} props
 * @returns {JSX.Element}
 */
export const GmailEmailSection = ({
  Icon,
  title,
  color,
  selected,
}: GmailEmailSectionProps) => {
  console.log("selected: ", selected);

  return (
    <GmailEmailSectionContainer color={color} selected={selected}>
      <Icon />
      <h4>{title}</h4>
    </GmailEmailSectionContainer>
  );
};
