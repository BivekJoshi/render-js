import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useAddTestimonial, useEditTestimonial } from "../useTestimonial";

const TesimonialSchema = Yup.object().shape({
  universityId: Yup.string().required("Please Select university"),
  scholarship: Yup.string().required("Please enter your scolorship amount"),
  description: Yup.string().required("Required"),
  visaDate: Yup.string().required("Please select visa date"),
});

const useTestimonialForm = ({ onClose, matchingTestimonial }) => {
  const [loading, setLoading] = useState(false);
  const { mutate: addTestimonial } = useAddTestimonial({});
  const { mutate: editTestimonial } = useEditTestimonial({});

  const formik = useFormik({
    initialValues: {
      universityId: matchingTestimonial?.university?.id || "",
      scholarship: matchingTestimonial?.scholarship || "",
      description: matchingTestimonial?.description || "",
      visaDate: matchingTestimonial?.visaDate || "",
      id: matchingTestimonial?.id || "",
    },
    validationSchema: TesimonialSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (matchingTestimonial) {
        handleEditRequest(values);
      } else {
        handleRequest(values);
      }
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
  const handleEditRequest = (values) => {
    values = { ...values };
    editTestimonial(values, {
      onSuccess: () => {
        onClose();
        formik.resetForm();
      },
    });
  };
  return { formik, loading };
};

export default useTestimonialForm;
