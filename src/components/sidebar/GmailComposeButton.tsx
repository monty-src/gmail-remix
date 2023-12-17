/**
 * components/sidebar/GmailComposeButton
 *
 *
 */

import { Button } from "@mui/material";
import Add from "@mui/icons-material/Add";

/**
 * Gmail Compose Button
 *
 *
 * @param {any} props
 * @returns {JSX.Element}
 */
export const GmailComposeButton = (props: {}): JSX.Element => {
  return <Button startIcon={<Add fontSize="large" />}>Compose</Button>;
};
