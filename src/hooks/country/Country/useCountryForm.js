import { useFormik } from "formik";
import { useAddCountry } from "../useCountry";
import * as Yup from "yup";

const CountrySchema = Yup.object().shape({
  countryCode: Yup.string().required("Please enter country code"),
  countryDescription: Yup.string().required("Please enter country description"),
  countryName: Yup.string().required("Please enter country name"),
});

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
    validationSchema: CountrySchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      handleRequest(value);
    },
  });

  return {
    formik,
  };
};

export default useCountryForm;
