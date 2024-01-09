import { useFormik } from "formik";
import { useAddCountry } from "../useCountry";

export const useCountryForm = ({ selectedProfile }) => {
  const { mutate } = useAddCountry({ selectedProfile });

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
      countryCode: "",
      countryDescription: "",
      countryName: "",
      imageFile: selectedProfile,
    },
    onSubmit: (value) => {
      handleRequest(value);
    },
  });

  return {
    formik,
  };
};

export default useCountryForm;
