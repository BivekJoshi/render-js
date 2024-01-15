import { useFormik } from "formik";
import { useAddUniversity, useAddUniversityImage, useEditUniversity } from "../useUniversity";
import * as Yup from "yup";

const UniversitySchema = Yup.object().shape({
  name: Yup.string().required("Please enter university name"),
  countryCode: Yup.string().required(
    "Please enter the country that university belong"
  ),
  url: Yup.string().required("Please enter redirecting url"),
});

export const useUniversityForm = ({ selectedProfile, data }) => {
  const { mutate } = useAddUniversity({ selectedProfile });
  const { mutate: editMutate } = useEditUniversity({ selectedProfile });
  const { mutate: editImgMutate } = useAddUniversityImage({ selectedProfile });


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
      name: data?.name || "",
      countryCode: data?.country?.countryCode || "",
      url: data?.url || "",
      universityLogo: selectedProfile,
      id: data?.id || "",
    },
    validationSchema: UniversitySchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      if (data) {
        handledEditRequest(value);
        // handledEditImgRequest(value);
      } else {
        handleRequest(value);
      }
    },
  });

  return { formik };
};

export default useUniversityForm;
