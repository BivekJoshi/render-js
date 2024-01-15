import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  changePassword,
  forgotPassword,
  getLoggedinUserDetail,
  login,
} from "../../api/auth/auth-api";
import toast from "react-hot-toast";
import { setUser } from "../../utility/cookieHelper";
import { useNavigate } from "react-router-dom";

/*________________________GET LOGGEDIN USER DETAIL_____________________________________*/
export const useGetLoggedInUserDetail = () => {
  return useQuery(["getLoggedinUserDetail"], () => getLoggedinUserDetail(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________LOGIN_____________________________________*/
export const useLogin = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(
    ["login"],
    async ({ email, password }) => {
      try {
        const response = await login(email, password);
        return response.data;
      } catch (error) {
        throw error.response.data.message || "An error occurred during login";
      }
    },
    {
      onSuccess: (data) => {
        setUser(data?.tokenId);
        toast.success("Login Successful");
        queryClient.invalidateQueries("getLoggedinUserDetail");
        if (data?.userType === "SUPER_ADMIN") {
          navigate("/superAdminProfile");
        } else if(data?.userType==="STUDENT"){
          navigate("/studentProfile");
        }else{
          navigate("/adminProfile");
        }
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};

/*________________________FORGET PASSWORD_____________________________________*/
export const useForgetPassword = ({ onSuccess }) => {
  const navigate = useNavigate();
  return useMutation(
    ["forgotPassword"],
    (formData) => forgotPassword(formData),
    {
      onSuccess: (data) => {
        toast.success("Your password is resetted please check your mail");
        navigate("/login");
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};

/*________________________CHANGE PASSWORD_____________________________________*/
export const useChangePassword = ({ onSuccess }) => {
  const navigate = useNavigate();
  return useMutation(
    ["changePassword"],
    (formData) => changePassword(formData),
    {
      onSuccess: (data) => {
        toast.success("Your password is changed successfully");
        navigate("/login");
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};