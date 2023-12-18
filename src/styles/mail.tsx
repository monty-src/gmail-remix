/**
 * styles/mail
 *
 *
 *
 */
import styled from "styled-components";

/**
 * Gmail Mail Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailContainer = styled.section`
  flex: 1;
  background-color: #f5f5f5;
`;

/**
 * Gmail Mail Tools
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailTools = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`;

/**
 * Gmail Mail Tools Left
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailToolsLeft = styled.section`
  display: flex;
`;

/**
 * Gmail Mail Tools Right
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailToolsRight = styled.section``;

/**
 * Gmail Mail Body
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailBody = styled.section`
  display: flex;
  flex-direction: column;

  margin: 30px;
  background-color: #fff;

  padding: 20px;
  height: 100vh;

  box-shadow: 0px 5px 7px 0 rgba(0, 0, 0, 0.24);
`;

/**
 * Gmail Mail Body Header
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailBodyHeader = styled.section`
  position: relative;

  display: flex;
  align-items: center;

  padding: 20px;

  border-bottom: 1px solid #f5f5f5;

  > h2 {
    font-weight: 400;
    margin-right: 20px;
  }

  > p {
    margin-left: 20px;
  }
`;

/**
 * Gmail Mail Label Important
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailLabelImportant = styled.span``;

/**
 * Gmail Mail Body Important
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailBodyImportant = styled.section``;

/**
 * Gmail Mail Body Message
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailBodyMessage = styled.section`
  > p {
    overflow-wrap: break-word;

    padding: 10px;
    margin-right: 20px;
  }
`;

/**
 * Gmail Mail Body Title
 *
 *
 * @returns {JSX.Element}
 */
export const GmailMailBodyTitle = styled.span`
  right: 0;
  top: 24px;
  position: absolute;

  font-size: 12px;

  color: #808080;
`;
