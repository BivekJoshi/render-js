import { axiosInstance } from "../axiosInterceptor";

/*________________________GET STUDENT_____________________________________*/
export const getStudent = async () => {
  const data = await axiosInstance.get(`v1/student/find`);
  return data;
};

/*________________________POST_____________________________________*/
export const addStudent = async (formData, selectedProfile) => {
  const imgData = new FormData();
  imgData.append("profilePicture", selectedProfile);

  Object.keys(formData).forEach((key) => {
    if (key !== "profilePicture") {
      imgData.append(key, formData[key]);
    }
  });

  try {
    const response = await axiosInstance.post(`v1/student/save`, imgData, {
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
