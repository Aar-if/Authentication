import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email("*email required")
    .email("Enter a valid e-mail ID"),
  password: yup.string().required().min(6),
});

export default LoginSchema;
