/**
 * styles/header
 *
 *
 *
 */
import styled from "styled-components";

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
export const GmailHeaderRight = styled.div`
  display: flex;
  padding-right: 20px;
`;

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
