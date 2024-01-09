import { useFormik } from "formik";
import { useAddMaterial } from "../useMaterial";

export const useMaterialForm = ({ selectedProfile }) => {
  const { mutate } = useAddMaterial({ selectedProfile });

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
      materialFile: selectedProfile,
      ofCountryCodes: "",
    },
    onSubmit: (value) => {
      handleRequest(value);
    },
  });

  return { formik };
};

export default useMaterialForm;
