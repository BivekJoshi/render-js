import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { getUserType, removeUser } from "../utility/cookieHelper";
import toast from "react-hot-toast";

const ProtectedRoutes = ({ redirectTo, allowedRoles }) => {
  const navigate = useNavigate();
  const user = getUserType();

  useEffect(() => {
    if (!user) {
      removeUser();
      navigate("/login");
      toast.error("Login To Access The Link");
    }
    // eslint-disable-next-line
  }, []);

  if (!allowedRoles?.includes(user)) return <Navigate exact to={redirectTo} />;
  return <Outlet />;
};

export default ProtectedRoutes;
