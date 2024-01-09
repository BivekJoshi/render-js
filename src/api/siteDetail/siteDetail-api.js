import { axiosInstance } from "../axiosInterceptor";

/*________________________GET SITE DETAIL_____________________________________*/
export const getSiteDetail= async () => {
  const response = await axiosInstance.get(`/v1/site-detail/find`);
  return response?.data;
};
