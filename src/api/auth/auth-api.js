import { axiosInstance } from "../axiosInterceptor";

/*________________________LOGIN_____________________________________*/
export const login = async (email, password) => {
  const { data } = await axiosInstance.post("/v1/authenticate", {
    email,
    password,
  });
  return data;
};

/*________________________GET LOGGEDIN USER DETAIL_____________________________________*/
export const getLoggedinUserDetail = async () => {
  const data = await axiosInstance.get(`/v1/user/find/logged-in`);
  return data?.data;
};

/*________________________FORGET PASSWORD_____________________________________*/
export const forgotPassword = async (formData) => {
  const data = await axiosInstance.put(`/v1/user/forgot-password`,formData);
  return data;
};

/*________________________CHANGE PASSWORD_____________________________________*/
export const changePassword = async (formData) => {
  const { confirmPassword, ...dataToSend } = formData;
  const data = await axiosInstance.put(`/v1/user/change-password`,dataToSend);
  return data;
};