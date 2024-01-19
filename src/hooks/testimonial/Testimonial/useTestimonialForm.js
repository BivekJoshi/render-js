import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useAddTestimonial } from "../useTestimonial";

const TesimonialSchema = Yup.object().shape({
    universityId: Yup.string().required("Please Select university"),
    scholarship: Yup.string().required("Please enter your scolorship amount"),
    description: Yup.string().required("Required"),
    visaDate: Yup.string().required("Please select visa date"),
});

const useTestimonialForm = ({onClose}) => {
  const [loading, setLoading] = useState(false);
  const { mutate: addTestimonial } = useAddTestimonial({});

  const formik = useFormik({
    initialValues: {
      universityId: "",
      scholarship: "",
      description: "",
      visaDate: "",
    },
    validationSchema: TesimonialSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleRequest(values);
      setLoading(true);
    },
  });

  const handleRequest = (values) => {
    values = { ...values };
    addTestimonial(values, {
      onSuccess: () => {
        onClose();
        formik.resetForm();
      },
    });
  };
  return { formik, loading };
};

export default useTestimonialForm;
