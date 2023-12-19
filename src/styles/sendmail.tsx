/**
 * styles/sendmail
 *
 *
 *
 */
import styled from "styled-components";
import { Button } from "@mui/material";

/**
 * Gmail Send Mail Container
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMailContainer = styled.section`
  bottom: 0;
  right: 50px;
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 40%;
  height: 40%;
  max-width: 500px;

  background-color: #404040;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

/**
 * Gmail Send Mail Header
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMailHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3px 3px 3px 13px;

  color: #808080;

  > h3 {
    font-size: 13px;
    color: #f5f5f5;
  }
`;

/**
 * Gmail Send Mail Form
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMailForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;

  > input,
  > textarea {
    height: 30px;
    padding: 10px;

    border: none;
    outline: none;
    border-bottom: 1px solid #f5f5f5;
  }
`;

/**
 * Gmail Send Mail Input1
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMailInput1 = styled.input``;

/**
 * Gmail Send Mail Input2
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMailInput2 = styled.input``;

/**
 * Gmail Send Mail Input Send Message
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMailInputSendMessage = styled.textarea`
  flex: 1;
`;

/**
 * Gmail Send Mail Options
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMailOptions = styled.section``;

/**
 *  Gmail Send Mail Send Button
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMailSendButton = styled(Button)`
  margin: 15px !important;
  text-transform: capitalize !important;
  background-color: #3079ed !important;
`;
