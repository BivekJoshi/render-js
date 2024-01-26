const STORAGE_KEY = "token";
const USER_TYPE = "userType";

export const setUser = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const setUserType = (data) => {
  localStorage.setItem(USER_TYPE, JSON.stringify(data));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

export const getUserType = () => {
  return JSON.parse(localStorage.getItem(USER_TYPE));
};

export const removeUser = () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.clear();
};

// window.addEventListener("beforeunload", removeUser);
