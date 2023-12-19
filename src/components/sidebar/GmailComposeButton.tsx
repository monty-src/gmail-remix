/**
 * components/sidebar/GmailComposeButton
 *
 *
 */

import { Button } from "@mui/material";
import Add from "@mui/icons-material/Add";

interface GmailComposeButtonProps {
  handleClick: () => void;
}

/**
 * Gmail Compose Button
 *
 *
 * @param {GmailComposeButtonProps} props
 * @returns {JSX.Element}
 */
export const GmailComposeButton = ({
  handleClick,
}: GmailComposeButtonProps): JSX.Element => {
  return (
    <Button onClick={handleClick} startIcon={<Add fontSize="large" />}>
      Compose
    </Button>
  );
};
