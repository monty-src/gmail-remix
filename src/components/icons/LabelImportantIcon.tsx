/**
 * components/icons/LabelImportantIcon
 *
 *
 */
import { IconLayout } from "./IconLayout";

import { LabelImportantContainer } from "../../styles/icons";

interface LabelImportantIconProps {
  color?: string;
}

/**
 * Label Important Icon
 *
 *
 * @param {props} color
 * @returns {JSX.Element}
 */
export const LabelImportantIcon = ({ color }: LabelImportantIconProps) => (
  <IconLayout>
    <LabelImportantContainer color={color} />
  </IconLayout>
);
