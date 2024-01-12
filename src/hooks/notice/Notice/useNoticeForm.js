import { useFormik } from "formik";
import { useAddImage } from "../useNotice";

export const useNoticeForm = ({ selectedProfile }) => {

  const { mutate } = useAddImage({selectedProfile});

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
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      endDateTime: "",
      noticeImage: selectedProfile,
      redirectingUrl: "",
    },
    onSubmit: (value) => {
    //   handleAddProfileImage(selectedProfile);
      handleRequest(value);
    },
  });

  return {
    formik,
  };
};

