import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useForgetPassword } from '../../../hooks/auth/useAuth';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
});

const useForgotPasswordForm = () => {
    const { mutate } = useForgetPassword({});

    const formik = useFormik({
        initialValues: {
            email: "",
            newPassword:"",
            dateOfBirth:"",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleRequest(values);
        },
    });

    const handleRequest = (values) => {
        values = {
            ...values,
        };
        mutate(values, formik, { onSuccess: () => formik.handleReset() });
    };

    return { formik };
};

export default useForgotPasswordForm;