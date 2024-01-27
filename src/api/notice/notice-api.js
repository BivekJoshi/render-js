import { axiosInstance } from "../axiosInterceptor";

export const addNotice = async (formData, selectedProfile) => {
  const imgData = new FormData();
  imgData.append("noticeImage", selectedProfile);

  Object.keys(formData).forEach((key) => {
    if (key !== "noticeImage") {
      imgData.append(key, formData[key]);
    }
  });

  try {
    const response = await axiosInstance.post(`v1/notice/save`, imgData, {
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


export const getNotice = async () => {
  const data = await axiosInstance.get(`v1/notice/find`);
  return data?.data;
};

export const getNoticeLatest = async () => {
  const data = await axiosInstance.get(`v1/notice/find/latest`);
  return data?.data;
};

export const editNotice = async (formData, selectedProfile) => {

  const imgData = new FormData();
  if (selectedProfile) {
    imgData.append("noticeImage", selectedProfile);
  }
  Object.keys(formData).forEach((key) => {
    if (key !== "noticeImage") {
      imgData.append(key, formData[key]);
    }
  });

  try {
    const response = await axiosInstance.put(`v1/notice/save`, imgData, {
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