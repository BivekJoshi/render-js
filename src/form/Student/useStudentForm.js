import { useFormik } from "formik";
import { useAddStudent, useEditStudent } from "../../hooks/student/useStudent";
import * as Yup from "yup";
import { useState } from "react";

const StudentSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  gender: Yup.string().required("Gender is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  address: Yup.string().required("Address is required"),
  email: Yup.string().required("Email is Required"),
  maritalStatus: Yup.string().required("Please select material status"),
  appliedCountryCode: Yup.string().required("Please select applied country"),
  idNumber: Yup.string().required("Please enter id number"),
  idType: Yup.string().required("Please select students Id type"),
  nationality: Yup.string().required("Nationality is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number format, must be 10 digits.")
    .matches(/^9[0-9]{9}$/, "Invalid mobile number format, must start with 9."),
});

const useStudentForm = ({ selectedProfile, onClose, data }) => {
  const [loading, setLoading] = useState(false);
  const { mutate: addStudent } = useAddStudent({ selectedProfile });
  const { mutate: editStudent } = useEditStudent({ selectedProfile });
  const formik = useFormik({
    initialValues: {
      fullName: data?.user?.fullName || "",
      gender: data?.user?.gender || "",
      dateOfBirth: data?.user?.dateOfBirth || "",
      address: data?.user?.address || "",
      email: data?.user?.email || "",
      mobileNumber: data?.user?.mobileNumber || "",
      nationality: data?.nationality || "",
      maritalStatus: "",
      appliedCountryCode: data?.appliedCountryCode?.countryCode || "",
      profilePicture: "",
      idNumber: data?.idNumber || "",
      idType: data?.idType || "",
      id: data?.id || "",
    },
    validationSchema: StudentSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      setLoading(true);
      if (data) {
        handleEditRequest(values);
      } else {
        handleRequest(values);
      }
    },
  });

  const handleRequest = (values) => {
    values = { ...values };
    addStudent(values, {
      onSuccess: () => {
        formik.resetForm();
        onClose();
      },
    });
  };
  const handleEditRequest = (values) => {
    values = { ...values };
    editStudent(values, {
      onSuccess: () => {
        formik.resetForm();
        onClose();
      },
    });
  };

  return { formik, loading };
};

export default useStudentForm;
