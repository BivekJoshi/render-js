import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddSiteDetail } from "../useSiteDetail";

const siteDetailSchema = Yup.object().shape({
  title: Yup.string().required("Please enter the study material"),
  // ofCountryCodes: Yup.string().required("Please select at least one country"),
});

export const useSiteDetailForm = ({ selectedProfile }) => {
  const { mutate } = useAddSiteDetail({ selectedProfile });

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
      title: "",
      companyName: "",
      address: "",
      contact1: "",
      contact2: "",
      quote: "",
      aboutUsTitle1: "",
      aboutUsDescription1: "",
      aboutUsTitle2: "",
      aboutUsDescription2: "",
      aboutUsTitle3: "",
      aboutUsDescription3: "",
      facebookUrl: "",
      pinterestUrl: "",
      youtubeUrl: "",
      instagramUrl: "",
    },
    validationSchema: siteDetailSchema,
    enableReinitialize: true,
    onSubmit: (value) => {
      handleRequest(value);
    },
  });

  return { formik };
};

export default useSiteDetailForm;
