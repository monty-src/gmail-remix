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
}: GmailSidebarOptionProps): JSX.Element => {
  return (
    <GmailSidebarOptionContainer>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </GmailSidebarOptionContainer>
  );
};
