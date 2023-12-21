/**
 * styles/email
 *
 *
 *
 */
import styled from "styled-components";
/**
 * Gmail Email List Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailListContainer = styled.section`
  flex: 1;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
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
  top: 0;
  z-index: 999;
  position: sticky;

  display: flex;
  align-items: center;

  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
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

/**
 * Gmail Email Row Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailRowsContainer = styled.section`
  padding-bottom: 20%;
`;

/**
 * Gmail Email Row Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailRowContainer = styled.section`
  cursor: pointer;
  z-index: 999;

  display: flex;
  align-items: center;

  height: 50px;

  border-bottom: 1px solid #f5f5f5;

  &:hover {
    border-top: 1px solid #f5f5f5;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;

/**
 * Gmail Email Row Options
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailRowOptions = styled.section`
  display: flex;
`;

/**
 * Gmail Email Row Title
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailRowTitle = styled.h3`
  flex: 0.3;
  font-size: 13px;
`;

/**
 * Gmail Email Row Message
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailRowMessage = styled.section`
  flex: 0.8;
  display: flex;
  align-items: center;

  font-size: 13px;

  > h4 {
    width: 400px;

    padding-left: 5px;
    padding-right: 5px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

/**
 * Gmail Email Row Description
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailRowDescription = styled.span`
  font-weight: 400;
  color: #808080 !important;
`;

/**
 * Gmail Email Row Time
 *
 *
 * @returns {JSX.Element}
 */
export const GmailEmailRowTime = styled.span`
  font-size: 9px;
  font-weight: bold;

  padding-right: 15px;
`;
