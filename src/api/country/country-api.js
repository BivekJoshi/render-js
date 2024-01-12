import { axiosInstance } from "../axiosInterceptor";

/*________________________GET_____________________________________*/
export const getCountry = async () => {
  const data = await axiosInstance.get(`/v1/country/find`);
  return data?.data?.data;
};

/*________________________GET COUNTRY CODE_____________________________________*/
export const getCountryCode = async () => {
  const data = await axiosInstance.get(`/v1/country/find/list`);
  return data?.data?.data;
};

/*________________________POST COUNTRY_____________________________________*/
export const addCountry = async (formData, selectedProfile) => {
  const imgData = new FormData();
  imgData.append("imageFile", selectedProfile);

  Object.keys(formData).forEach((key) => {
    if (key !== "imageFile") {
      imgData.append(key, formData[key]);
    }
  });
  try {
    const response = await axiosInstance.post(`v1/country/save`, imgData, {
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

/*________________________Edit COUNTRY_____________________________________*/
export const editCountry = async (formData, selectedProfile) => {
  const imgData = new FormData();
  imgData.append("imageFile", selectedProfile);

  Object.keys(formData).forEach((key) => {
    if (key !== "imageFile") {
      imgData.append(key, formData[key]);
    }
  });
  try {
    const response = await axiosInstance.put(`v1/country/save`, imgData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error editing notice:", error);
    throw error;
  }
};
