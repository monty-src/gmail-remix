/**
 * styles/icons
 *
 *
 *
 */
import styled from "styled-components";
import { Close, LabelImportant } from "@mui/icons-material";

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

/**
 * Close Container
 *
 *
 * @returns {JSX.Element}
 */
export const CloseContainer = styled(Close)<{
  color?: string;
}>`
  color: ${({ color }) => color};
`;
