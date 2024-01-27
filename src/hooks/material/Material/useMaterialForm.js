import { useFormik } from "formik";
import { useAddMaterial, useEditMaterial } from "../useMaterial";
import * as Yup from "yup";
import { useState } from "react";

const materialSchema = Yup.object().shape({
  name: Yup.string().required("Please enter the study material"),
  // ofCountryCodes: Yup.string().required("Please select at least one country"),
});

export const useMaterialForm = ({ selectedProfile, data, onClose }) => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useAddMaterial({ selectedProfile });
  const { mutate: editmutate } = useEditMaterial({ selectedProfile });

  const handleRequest = (value) => {
    value = { ...value };
    mutate(value, {
      onSuccess: () => {
        formik.resetForm();
        onClose();
      },
    });
  };
  const handleEditRequest = (value) => {
    value = { ...value };
    editmutate(value, {
      onSuccess: () => {
        formik.resetForm();
        onClose();
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      name: data?.name || "",
      ofCountryCodes: "",
      id: data?.id || "",
    },
    validationSchema: materialSchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      setLoading(true);
      if (data) {
        handleEditRequest(value);
      } else {
        handleRequest(value);
      }
    },
  });

  return { formik, loading };
};

export default useMaterialForm;
