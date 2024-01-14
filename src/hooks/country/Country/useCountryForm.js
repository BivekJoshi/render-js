import { useFormik } from "formik";
import { useAddCountry, useEditCountry } from "../useCountry";
import * as Yup from "yup";

const CountrySchema = Yup.object().shape({
  countryCode: Yup.string().required("Please enter country code"),
  countryDescription: Yup.string().required("Please enter country description"),
  countryName: Yup.string().required("Please enter country name"),
});

export const useCountryForm = ({ selectedProfile ,data}) => {
  const { mutate } = useAddCountry({ selectedProfile });
  const { mutate :editMutate} = useEditCountry({ selectedProfile });

  const handleRequest = (value) => {
    value = { ...value };
    mutate(value, {
      onSuccess: () => {
        formik.resetForm();
      },
    });
  };
  const handledEditRequest = (value) => {
    value = { ...value };
    editMutate(value, {
      onSuccess: () => {
        formik.resetForm();
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      countryCode: data?.countryCode||"",
      countryDescription: data?.countryDescription||"",
      countryName: data?.countryName||"",
      // imageFile: selectedProfile,
    },
    validationSchema: CountrySchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      // handleRequest(value);
      if (data) {
        handledEditRequest(value);
      } else {
        handleRequest(value);
      }
    },
  });

  return {
    formik,
  };
};

export default useCountryForm;
