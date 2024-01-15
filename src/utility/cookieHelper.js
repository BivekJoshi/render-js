const STORAGE_KEY = 'token';

export const setUser = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

export const removeUser = () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.clear();
};

// window.addEventListener("beforeunload", removeUser);
