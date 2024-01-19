import { useFormik } from "formik";
import { useAddRegistation } from "../useRegistation";
import { useState } from "react";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is Required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format, must be 10 digits.")
    .matches(/^9[0-9]{9}$/, "Invalid mobile number format, must start with 9."),
  appliedCountryCode: Yup.string().required(
    "Please select a country you wnat to apply for"
  ),
});

const useRegistationForm = ({onClose}) => {
  const [loading, setLoading] = useState(false);
  const { mutate: addRegistation } = useAddRegistation({});

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      appliedCountryCode: "",
    },
    validationSchema: RegisterSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleRequest(values);
      setLoading(true);
    },
  });

  const handleRequest = (values) => {
    values = { ...values };
    addRegistation(values, {
      onSuccess: () => {
        onClose();
        formik.resetForm();
      },
    });
  };
  return { formik, loading };
};

export default useRegistationForm;
