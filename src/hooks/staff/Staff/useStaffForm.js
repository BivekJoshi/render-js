import { useFormik } from "formik";
import { useAddStaff } from "../useStaff";
import * as Yup from "yup";

const StaffSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  gender: Yup.string().required("Gender is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  address: Yup.string().required("Address is required"),
  email: Yup.string().required("Email is Required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format, must be 10 digits.")
    .matches(/^9[0-9]{9}$/, "Invalid mobile number format, must start with 9."),
  position: Yup.string().required("Position is Required"),
});

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
      position: "",
    },
    validationSchema: StaffSchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      handleRequest(value);
    },
  });

  return {
    formik,
  };
};
export default useStaffForm;
