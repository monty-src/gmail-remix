/**
 * styles/icons
 *
 *
 *
 */
import styled from "styled-components";
import { LabelImportant } from "@mui/icons-material";

/**
 * Label Important Container
 *
 *
 * @returns {JSX.Element}
 */
export const LabelImportantContainer = styled(LabelImportant)<{
  color?: string;
}>`
  color: ${({ color }) => color};
`;
