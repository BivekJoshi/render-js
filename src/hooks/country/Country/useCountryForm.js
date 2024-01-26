import { useFormik } from "formik";
import {
  useAddCountry,
  useEditCountry,
  useEditCountryImg,
} from "../useCountry";
import * as Yup from "yup";
import { useState } from "react";

const CountrySchema = Yup.object().shape({
  countryCode: Yup.string().required("Please enter country code"),
  countryDescription: Yup.string().required("Please enter country description"),
  countryName: Yup.string().required("Please enter country name"),
});

export const useCountryForm = ({ selectedProfile, data, onClose }) => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useAddCountry({ selectedProfile });
  const { mutate: editMutate } = useEditCountry({ selectedProfile });
  const { mutate: editImgMutate } = useEditCountryImg({ selectedProfile });

  const handleRequest = (value) => {
    value = { ...value };
    mutate(value, {
      onSuccess: () => {
        formik.resetForm();
        onClose();
      },
    });
  };
  const handledEditRequest = (value) => {
    value = { ...value };
    editMutate(value, {
      onSuccess: () => {
        formik.resetForm();
        onClose();
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
    },
    validationSchema: CountrySchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      setLoading(true);
      if (data) {
        handledEditRequest(value);
        // handledEditImgRequest(value);
      } else {
        handleRequest(value);
      }
    },
  });

  return {
    formik,
    loading,
  };
};

export default useCountryForm;
