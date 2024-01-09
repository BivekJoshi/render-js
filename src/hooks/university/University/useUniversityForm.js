import { useFormik } from "formik";
import { useAddUniversity } from "../useUniversity";

export const useUniversityForm = ({ selectedProfile }) => {
  const { mutate } = useAddUniversity({ selectedProfile });

  const handleRequest = (value) => {
    value = { ...value };
    mutate(value, {
      onSuccess: () => {
        formik.resetForm();
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      countryCode: "",
      url: "",
      universityLogo: selectedProfile,
    },
    onSubmit: (value) => {
      handleRequest(value);
    },
  });

  return { formik };
};

export default useUniversityForm;
