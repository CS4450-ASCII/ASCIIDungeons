export default validations = {
  VALID_EMAIL: Yup.string()
    .email('Email must be valid.')
    .required('Email required.'),
  PASSWORD_REQUIRED: Yup.string().required('Password required.')
};
