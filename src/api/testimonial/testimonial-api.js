import { axiosInstance } from "../axiosInterceptor";

/*_____________________________POST TESTIMONIAL_______________________________________________ */
export const addTestimonial = async (formData) => {
  const data = await axiosInstance.post("/v1/testimonial/save", formData);
  return data;
};
/*_____________________________EDIT TESTIMONIAL_______________________________________________ */
export const editTestimonial = async (formData) => {
  const data = await axiosInstance.put("/v1/testimonial/save", formData);
  return data;
};

/*_____________________________GET TESTIMONIAL_______________________________________________ */
export const getTestimonial = async () => {
  const data = await axiosInstance.get("/v1/testimonial/find");
  return data?.data?.data;
};
