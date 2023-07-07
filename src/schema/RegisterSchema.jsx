import * as yup from 'yup';


const RegisterSchema = yup.object().shape({
    name: yup.string().required("*first name required").min(3, "*should not be less than 3 characters"),
    email: yup.string().required().email("*email required").email("Enter a valid e-mail ID"),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
  });


  export default RegisterSchema