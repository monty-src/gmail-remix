/**
 * styles/styles
 *
 *
 */
import styled, { createGlobalStyle } from "styled-components";

/**
 * Global Styles
 *
 *
 * @returns {JSX.Element}
 */
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  /** Overrides cause i don't want to set theme */
  .MuiButton-textPrimary { color: #000 !important; }
`;


/**
 * GmailApp
 * 
 * 
 * @returns {JSX.Element}
 */
export const GmailApp = styled.section``;