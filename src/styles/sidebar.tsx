import styled from "styled-components";

/**
 * Gmail Sidebar Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSidebarContainer = styled.section`
  > button {
    padding: 15px !important;
    margin: 15px 0 15px 10px !important;

    border-radius: 30px !important;

    color: #808080 !important;
    text-transform: capitalize !important;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75) !important;
  }
`;

/**
 * Gmail Sidebar Options Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSidebarOptionsContainer = styled.section``;

/**
 * Gmail Sidebar Option Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSidebarOptionContainer = styled.section<{
  selected?: boolean;
}>`
  height: 40px;
  padding: 0 10px;

  cursor: pointer;
  color: #808080;

  display: flex;
  align-items: center;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  > h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
  }

  > p {
    font-weight: 300;
    display: ${({ selected }) => (selected ? "inline" : "none")};
  }

  &:hover > p {
    display: inline;
  }

  &:hover,
  &:hover h3,
  &:hover > p {
    color: #c04b37;
    background: #fcecec;
  }

  > .MuiSvgIcon-root {
    padding: 5px;
  }
`;