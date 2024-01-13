import { useFormik } from "formik";
import { useAddImage } from "../useNotice";
import * as Yup from "yup";

const NoticeSchema = Yup.object().shape({
  title: Yup.string().required("Please enter notice title"),
  description: Yup.string().required("Please enter notice description"),
  endDateTime: Yup.string().required("Please select date for notice"),
  redirectingUrl: Yup.string().required("Please enter a redirecting url"),
});

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
    validationSchema: NoticeSchema,
    enableReinitialize: true,
    onSubmit: (value) => {
    //   handleAddProfileImage(selectedProfile);
      handleRequest(value);
    },
  });

  return {
    formik,
  };
};

export default useNoticeForm;
