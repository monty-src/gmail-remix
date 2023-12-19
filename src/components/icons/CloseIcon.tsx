/**
/**
 * components/icons/CloseIcon
 *
 *
 */
import { IconLayout } from "./IconLayout";

import { CloseContainer } from "../../styles/icons";

interface CloseIconProps {
  color?: string;
  pointer?: boolean;
  handleClick?: () => void;
}

/**
 * Close Icon
 *
 *
 * @param {CloseIconProps} props
 * @returns {JSX.Element}
 */
export const CloseIcon = ({ color, handleClick }: CloseIconProps) => {
  return (
    <IconLayout handleClick={handleClick}>
      <CloseContainer color={color} />
    </IconLayout>
  );
};
