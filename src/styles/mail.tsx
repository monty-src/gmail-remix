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
export const GmailMailContainer = styled.section``;

/**
 * Gmail Email List Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailListContainer = styled.section`
  flex: 1;
  overflow: scroll;
`;

/**
 * Gmail Email List Settings
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailListSettings = styled.section`
  top: 0;
  z-index: 999;
  position: sticky;

  padding-right: 10px;

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
`;

/**
 * Gmail Email List Settings Left
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailListSettingsLeft = styled.section``;

/**
 * Gmail Email List Settings Right
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailListSettingsRight = styled.section``;

/**
 * Gmail Email List Sections Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailSectionsContainer = styled.section`
  display: flex;
  align-items: center;
`;

/**
 * Gmail Email List Section Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailSectionContainer = styled.section<{
  color: string;
  selected?: boolean;
}>`
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 5px 0;
  min-width: 220px;

  border-width: 3px;
  border-bottom: 3px solid
    ${({ color, selected }) => (selected ? color : "transparent")};

  background-color: ${({ selected }) => selected && "#F5F5F5"};
  color: ${({ color, selected }) => (selected ? color : "#808080")};

  &:hover {
    background-color: #f5f5f5 !important;
    border-bottom: 3px solid ${({ color }) => color};
  }

  > button {
    color: ${({ color, selected }) => selected && color} !important;
  }

  > h4 {
    font-size: 14px;
    margin-left: 15px;
  }
`;
