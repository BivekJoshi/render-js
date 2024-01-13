import { useFormik } from "formik";
import { useAddUniversity } from "../useUniversity";
import * as Yup from "yup";

const UniversitySchema = Yup.object().shape({
  name: Yup.string().required("Please enter university name"),
  countryCode: Yup.string().required("Please enter the country that university belong"),
  url: Yup.string().required("Please enter redirecting url"),
});

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
    validationSchema: UniversitySchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      handleRequest(value);
    },
  });

  return { formik };
};

export default useUniversityForm;
