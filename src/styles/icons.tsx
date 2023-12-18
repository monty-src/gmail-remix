import { LabelImportant } from "@mui/icons-material";
import styled from "styled-components";

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
