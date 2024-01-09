import { axiosInstance } from "../axiosInterceptor";

export const addUniversity = async (formData, selectedProfile) => {

  const imgData = new FormData();
  imgData.append("universityLogo", selectedProfile);

  Object.keys(formData).forEach((key) => {
    if (key !== "universityLogo") {
      imgData.append(key, formData[key]);
    }
  });

  try {
    const response = await axiosInstance.post(`v1/university/save`, imgData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding university:", error);
    throw error;
  }
};


export const getUniversity = async () => {
  const data = await axiosInstance.get(`v1/university/find`);
  return data?.data;
};