import { useFormik } from "formik";
import { useAddStudent } from "../../hooks/student/useStudent";

const useStudentForm = ({ selectedProfile }) => {
  const { mutate: addStudent } = useAddStudent({ selectedProfile });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      gender: "",
      dateOfBirth: "",
      address: "",
      email: "",
      mobileNumber: "",
      userType: "",
      nationality: "",
      maritalStatus: "",
      appliedCountryCode: "",
      profilePicture: "",
      idNumber:"",
      idType:"",
    },
    // validationSchema: CompanySchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleRequest(values);
    },
  });

  const handleRequest = (values) => {
    values = { ...values };
    addStudent(values, {
      onSuccess: () => {
        formik.resetForm();
      },
    });
  };

  return { formik };
};

export default useStudentForm;
