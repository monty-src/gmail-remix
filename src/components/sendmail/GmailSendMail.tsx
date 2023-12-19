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
  GmailSendMailFormError,
} from "../../styles/sendmail";
import { useAppDispatch } from "../../store/hooks";
import { closeSendMessage } from "../../store/mail/slice";

/**
 * Gmail Send Mail
 *
 *
 * @returns {JSX.Element}
 */
export const GmailSendMail = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("data: ", data);
    console.log("errors: ", errors);
  };

  const handleCloseIconClick = () => {
    dispatch(closeSendMessage());
  };

  return (
    <GmailSendMailContainer>
      <GmailSendMailHeader>
        <h3>New Message</h3>
        <CloseIcon handleClick={handleCloseIconClick} color="#808080" />
      </GmailSendMailHeader>
      <GmailSendMailForm onSubmit={handleSubmit(onSubmit)}>
        <GmailSendMailInput1
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && (
          <GmailSendMailFormError>To is Required!</GmailSendMailFormError>
        )}
        <GmailSendMailInput2
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <GmailSendMailFormError>Subject is Required!</GmailSendMailFormError>
        )}
        <GmailSendMailInputSendMessage
          placeholder="Message..."
          {...register("message", { required: true })}
        />
        {errors.message && (
          <GmailSendMailFormError>Message is Required!</GmailSendMailFormError>
        )}
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
