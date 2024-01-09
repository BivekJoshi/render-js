import { axiosInstance } from "../axiosInterceptor";

export const getRegistation = async () => {
    const data = await axiosInstance.get("/v1/registration/find");
    return data;
  };

export const addRegistation = async (formData) => {
  const data = await axiosInstance.post("/v1/registration/save", formData);
  return data;
};
