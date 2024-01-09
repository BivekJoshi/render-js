import { useFormik } from "formik";
import { useAddRegistation } from "../useRegistation";
import { useState } from "react";

const useRegistationForm = (onClose) => {
  const [loading, setLoading] = useState(false);
  const { mutate: addRegistation } = useAddRegistation({});

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      appliedCountryCode: "",
    },
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
        onClose;
        formik.resetForm();
      },
    });
  };
  return { formik, loading };
};

export default useRegistationForm;
