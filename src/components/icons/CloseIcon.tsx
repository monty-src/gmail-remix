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
}

/**
 * Close Icon
 *
 *
 * @param {CloseIconProps} props
 * @returns {JSX.Element}
 */
export const CloseIcon = ({ color }: CloseIconProps) => {
  return (
    <IconLayout>
      <CloseContainer color={color}  />
    </IconLayout>
  );
};
