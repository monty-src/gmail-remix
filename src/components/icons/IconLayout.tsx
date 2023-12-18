/**
 * components/icons/IconLayout
 *
 *
 */
import { IconButton } from "@mui/material";

interface IconLayoutProps {
  children: JSX.Element;
  handleClick?: () => void;
}

/**
 * Icon Layout
 *
 *
 * @param {IconLayoutProps} props
 * @returns {JSX.Element}
 */
export const IconLayout = ({
  children,
  handleClick,
}: IconLayoutProps): JSX.Element => {
  return <IconButton onClick={handleClick}>{children}</IconButton>;
};
