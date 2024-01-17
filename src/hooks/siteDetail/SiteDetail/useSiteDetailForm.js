import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddSiteDetail, useGetSiteDetail } from "../useSiteDetail";

const siteDetailSchema = Yup.object().shape({
  title: Yup.string().required("Please enter the study material"),
  // ofCountryCodes: Yup.string().required("Please select at least one country"),
});

export const useSiteDetailForm = ({ selectedProfile }) => {
  const {data,isLoading}=useGetSiteDetail();
  console.log(data,"data");
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
      title: data?.title||"",
      companyName: data?.companyName||"",
      address: data?.address||"",
      contact1: data?.contact1||"",
      contact2: data?.contact2||"",
      quote: data?.quote||"",
      aboutUsTitle1: data?.aboutUsTitle1||"",
      aboutUsDescription1: data?.aboutUsDescription1||"",
      aboutUsTitle2: data?.aboutUsTitle2||"",
      aboutUsDescription2: data?.aboutUsDescription2||"",
      aboutUsTitle3: data?.aboutUsTitle1||"",
      aboutUsDescription3: data?.aboutUsDescription3||"",
      facebookUrl: data?.facebookUrl||"",
      pinterestUrl: data?.pinterestUrl||"",
      youtubeUrl: data?.youtubeUrl||"",
      instagramUrl: data?.instagramUrl||"",
      id:data?.id||""
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
