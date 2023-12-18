/**
 * styles/search
 *
 *
 *
 */
import styled from "styled-components";

/**
 * Gmail Search Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSearchContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    color: #808080;
  }
`;

/**
 * Gmail Search Input
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSearchInput = styled.input`
  border: none;
  width: 100%;
  padding: 10px;

  font-size: 16px;

  outline-width: 0;
  background: transparent;
`;
