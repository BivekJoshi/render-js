import * as Yup from "yup";
import { useFormik } from "formik";
import { useChangePassword } from "../../../hooks/auth/useAuth";

const validationSchema = Yup.object({
  oldPassword: Yup.string().required("Please enter your old password"),
  email: Yup.string().required("Please enter your email"),
  // dateOfBirth: Yup.string().required("Please select yor date of birth"),
  
  newPassword: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one digit (number).")
    .matches(
      /^(?=.*[@#$%^&+=])/,
      "Password must contain at least one special character (@, #, $, %, ^, &, +, =,!)."
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required.")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

const useResetPasswordForm = () => {
  const { mutate } = useChangePassword({});

  const formik = useFormik({
    initialValues: {
      email: "",
      oldPassword: "",
      newPassword: "",
      dateOfBirth: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleRequest(values);
    },
  });

  const handleRequest = (values) => {
    values = {
      ...values,
    };
    mutate(values, formik, { onSuccess: () => formik.handleReset() });
  };

  return { formik };
};

export default useResetPasswordForm;
