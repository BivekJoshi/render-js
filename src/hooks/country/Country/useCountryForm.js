import { useFormik } from "formik";
import {
  useAddCountry,
  useEditCountry,
  useEditCountryImg,
} from "../useCountry";
import * as Yup from "yup";

const CountrySchema = Yup.object().shape({
  countryCode: Yup.string().required("Please enter country code"),
  countryDescription: Yup.string().required("Please enter country description"),
  countryName: Yup.string().required("Please enter country name"),
});

export const useCountryForm = ({ selectedProfile, data }) => {
  const { mutate } = useAddCountry({ selectedProfile });
  const { mutate: editMutate } = useEditCountry({ selectedProfile });
  const { mutate: editImgMutate } = useEditCountryImg({ selectedProfile });

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
  const handledEditImgRequest = (value) => {
    value = { ...value };
    editImgMutate(value, {
      onSuccess: () => {
        formik.resetForm();
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      countryCode: data?.countryCode || "",
      countryDescription: data?.countryDescription || "",
      countryName: data?.countryName || "",
      // imageFile: selectedProfile,
      id: data?.id || "",
    },
    validationSchema: CountrySchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      // handleRequest(value);
      if (data) {
        handledEditRequest(value);
        handledEditImgRequest(value);
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
