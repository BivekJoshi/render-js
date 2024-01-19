import { useFormik } from "formik";
import {
  useAddUniversity,
  useAddUniversityImage,
  useEditUniversity,
} from "../useUniversity";
import * as Yup from "yup";
import { useState } from "react";

const UniversitySchema = Yup.object().shape({
  name: Yup.string().required("Please enter university name"),
  countryCode: Yup.string().required(
    "Please enter the country that university belong"
  ),
  url: Yup.string().required("Please enter redirecting url"),
});

export const useUniversityForm = ({ selectedProfile, data, onClose }) => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useAddUniversity({ selectedProfile });
  const { mutate: editMutate } = useEditUniversity({ selectedProfile });
  const { mutate: editImgMutate } = useAddUniversityImage({ selectedProfile });

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
        onClose();
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      name: data?.name || "",
      countryCode: data?.country?.countryCode || "",
      url: data?.url || "",
      // universityLogo: selectedProfile,
      id: data?.id || "",
    },
    validationSchema: UniversitySchema,
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

  return { formik, loading };
};

export default useUniversityForm;
