import { useFormik } from "formik";
import { useAddMaterial } from "../useMaterial";
import * as Yup from "yup";

const materialSchema = Yup.object().shape({
  name: Yup.string().required("Please enter the study material"),
  // ofCountryCodes: Yup.string().required("Please select at least one country"),
});

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
      ofCountryCodes: "",
    },
    validationSchema: materialSchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      handleRequest(value);
    },
  });

  return { formik };
};

export default useMaterialForm;
