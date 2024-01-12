import { useFormik } from "formik";
import { useAddStaff } from "../useStaff";

export const useStaffForm = ({ selectedProfile }) => {
  const { mutate } = useAddStaff({ selectedProfile });

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
      fullName: "",
      gender: "",
      dateOfBirth: "",
      address: "",
      email: "",
      mobileNumber: "",
      profilePicture: selectedProfile,
      position: "",
    },
    onSubmit: (value) => {
      handleRequest(value);
    },
  });

  return {
    formik,
  };
};
