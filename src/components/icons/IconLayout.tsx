/**
 * src/icons/IconLayout
 *
 *
 */
import { IconButton } from "@mui/material";

interface Props {
  children: JSX.Element;
}

/**
 * Icon Layout
 *
 *
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 */
export const IconLayout = ({ children }: Props): JSX.Element => {
  return <IconButton>{children}</IconButton>;
};
