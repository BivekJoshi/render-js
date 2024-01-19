import { useFormik } from "formik";
import { useAddStaff, useEditStaff } from "../useStaff";
import * as Yup from "yup";
import { useState } from "react";

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

export const useStaffForm = ({ selectedProfile, onClose, data }) => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useAddStaff({ selectedProfile });
  const { mutate: editMutate } = useEditStaff({ selectedProfile });

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
    editMutate(value, {
      onSuccess: () => {
        formik.resetForm();
        onClose();
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      fullName: data?.user?.fullName || "",
      gender: data?.user?.gender || "",
      dateOfBirth: data?.user?.dateOfBirth || "",
      address: data?.user?.address || "",
      email: data?.user?.email || "",
      mobileNumber: data?.user?.mobileNumber || "",
      position: data?.position || "",
      id: data?.id || "",
    },
    validationSchema: StaffSchema,
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

  return {
    formik,
    loading,
  };
};
export default useStaffForm;
