import { axiosInstance } from "../axiosInterceptor";

/*________________________GET SITE DETAIL_____________________________________*/
export const getSiteDetail= async () => {
  const response = await axiosInstance.get(`/v1/site-detail/find`);
  return response?.data?.data;
};

/*________________________POST SITE DETAIL_____________________________________*/
export const addSiteDetail = async (formData, selectedProfile) => {
  const imgData = new FormData();
  imgData.append("imageFile", selectedProfile);

  Object.keys(formData).forEach((key) => {
    if (key !== "imageFile") {
      imgData.append(key, formData[key]);
    }
  });
  try {
    const response = await axiosInstance.post(`/v1/site-detail/save`, imgData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding notice:", error);
    throw error;
  }
};