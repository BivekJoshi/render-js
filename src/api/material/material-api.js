import { axiosInstance } from "../axiosInterceptor";


export const getMaterial = async () => {
    const data = await axiosInstance.get(`v1/material/find`);
    return data?.data;
  };

export const addMaterial = async (formData, selectedProfile) => {
console.log(formData,"najsnxasjxasjklxmasnxasxasx");
  const imgData = new FormData();
  imgData.append("materialFile ", selectedProfile);

  Object.keys(formData).forEach((key) => {
    if (key !== "materialFile ") {
      imgData.append(key, formData[key]);
    }
  });

  try {
    const response = await axiosInstance.post(`v1/material/save`, imgData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding material:", error);
    throw error;
  }
};

