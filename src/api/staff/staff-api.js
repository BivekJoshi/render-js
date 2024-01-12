import { axiosInstance } from "../axiosInterceptor";

export const addStaff = async (formData, selectedProfile) => {

  const imgData = new FormData();
  imgData.append("profilePicture", selectedProfile);

  Object.keys(formData).forEach((key) => {
    if (key !== "profilePicture") {
      imgData.append(key, formData[key]);
    }
  });

  try {
    const response = await axiosInstance.post(`v1/staff/save`, imgData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding staff:", error);
    throw error;
  }
};


export const getStaff = async () => {
  const data = await axiosInstance.get(`v1/notice/find`);
  return data?.data;
};