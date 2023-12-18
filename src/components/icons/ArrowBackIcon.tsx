/**
/**
 * components/icons/ArrowBackIcon
 *
 *
 */
import { IconLayout } from "./IconLayout";
import ArrowBack from "@mui/icons-material/ArrowBack";

interface ArrowBackIconProps {
  handleClick?: () => void;
}

/**
 * ArrowBack Icon
 *
 *
 * @returns {JSX.Element}
 */
export const ArrowBackIcon = ({
  handleClick,
}: ArrowBackIconProps): JSX.Element => (
  <IconLayout handleClick={handleClick}>
    <ArrowBack />
  </IconLayout>
);
