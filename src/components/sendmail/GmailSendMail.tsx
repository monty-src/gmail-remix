/**
 * components/sendmail/GmailSendMail
 *
 *
 */
import { useForm } from "react-hook-form";
import { CloseIcon } from "../icons/CloseIcon";

import {
  GmailSendMailForm,
  GmailSendMailInput1,
  GmailSendMailInput2,
  GmailSendMailHeader,
  GmailSendMailOptions,
  GmailSendMailContainer,
  GmailSendMailSendButton,
  GmailSendMailInputSendMessage,
} from "../../styles/sendmail";

/**
 * Gmail Send Mail
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data: ", data);
    console.log("errors: ", errors);
  };

  return (
    <GmailSendMailContainer>
      <GmailSendMailHeader>
        <h3>New Message</h3>
        <CloseIcon color="#808080" />
      </GmailSendMailHeader>
      <GmailSendMailForm onSubmit={handleSubmit(onSubmit)}>
        <GmailSendMailInput1 placeholder="To" {...register("to")} />
        <GmailSendMailInput2 placeholder="Subject" {...register("subject")} />
        <GmailSendMailInputSendMessage
          placeholder="Message..."
          {...register("message")}
        />
        <GmailSendMailOptions>
          <GmailSendMailSendButton
            type="submit"
            color="primary"
            variant="contained"
          >
            Send
          </GmailSendMailSendButton>
        </GmailSendMailOptions>
      </GmailSendMailForm>
    </GmailSendMailContainer>
  );
};
