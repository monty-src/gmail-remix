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
  }
`;

/**
 * Gmail Header Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border-bottom: 1px solid #f5f5f5; */
`;

/**
 * Gmail Header Left
 *
 *
 * @returns {JSX.Element}
 */
export const GmailHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * Gmail Header Middle
 *
 *
 * @returns {JSX.Element}
 */
export const GmailHeaderMiddle = styled.div`
  flex: 0.7;
  display: flex;

  padding: 10px;
  border-radius: 5px;

  background: #f5f5f5;
`;

/**
 * Gmail Header Right
 *
 *
 * @returns {JSX.Element}
 */
export const GmailHeaderRight = styled.div``;

/**
 * Gmail Header Right
 *
 *
 * @returns {JSX.Element}
 */
export const GmailLogo = styled.img`
  height: 80px;
  margin-left: 5px;

  object-fit: contain;
`;

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
