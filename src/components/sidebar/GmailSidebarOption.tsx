/**
 * components/sidebar/GmailSidebarOption
 *
 *
 */
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { GmailSidebarOptionContainer } from "../../styles/sidebar";

interface GmailSidebarOptionProps {
  title: string;
  number: number;
  selected?: boolean;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

/**
 * Gmail Sidebar Option
 *
 *
 * @param {GmailSidebarOptionProps} props
 * @returns {JSX.Element}
 */
export const GmailSidebarOption = ({
  Icon,
  title,
  number,
  selected,
}: GmailSidebarOptionProps): JSX.Element => {
  return (
    <GmailSidebarOptionContainer selected={selected}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </GmailSidebarOptionContainer>
  );
};
