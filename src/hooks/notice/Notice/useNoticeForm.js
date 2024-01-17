import { useFormik } from "formik";
import { useAddImage, useEditImage } from "../useNotice";
import * as Yup from "yup";

const NoticeSchema = Yup.object().shape({
  title: Yup.string().required("Please enter notice title"),
  description: Yup.string().required("Please enter notice description"),
  endDateTime: Yup.string().required("Please select date for notice"),
  redirectingUrl: Yup.string().required("Please enter a redirecting url"),
});

export const useNoticeForm = ({ selectedProfile, data }) => {
  const { mutate } = useAddImage({ selectedProfile });
  const { mutate: editMutate } = useEditImage({ selectedProfile });

  //   const handleAddProfileImage = (value) => {
  //     console.log(value,"value1");
  //     mutate(value, {});
  //   };
  const handleRequest = (value) => {
    // console.log(...value,"value2");
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
      title: data?.title || "",
      description: data?.description || "",
      endDateTime: data?.endDateTime || "",
      redirectingUrl: data?.redirectingUrl || "",
      id: data?.id || "",
    },
    validationSchema: NoticeSchema,
    enableReinitialize: true,
    onSubmit: (value) => {
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

export default useNoticeForm;
