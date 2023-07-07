import * as yup from "yup";

const ForgotSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email("*Enter a valid e-mail ID")
    .email("Enter a valid e-mail ID"),
  password: yup.string().required().min(6),
});

export default ForgotSchema;
