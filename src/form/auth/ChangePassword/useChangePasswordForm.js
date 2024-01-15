import * as Yup from "yup";
import { useFormik } from "formik";
import { useChangePassword } from "../../../hooks/auth/useAuth";

const validationSchema = Yup.object({
  oldPassword: Yup.string().required("Please enter your old password"),
  newPassword: Yup.string().required("Please enter your new password"),
});

const useChangePasswordForm = () => {
  const { mutate } = useChangePassword({});

  const formik = useFormik({
    initialValues: {
      email: "",
      oldPassword: "",
      newPassword: "",
      // dateOfBirth:"",
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

export default useChangePasswordForm;
