import { axiosInstance } from "../axiosInterceptor";

/*_____________________________POST TESTIMONIAL_______________________________________________ */
export const addTestimonial = async (formData) => {
  const data = await axiosInstance.post("/v1/testimonial/save", formData);
  return data;
};
