import React, { useEffect, useState } from "react";
import AppLayoutWithServer from "./AppLayoutWithServer";
import Applayout from "./Applayout";
import { axiosInstance } from "../../api/axiosInterceptor";

const ChooseWhatTo = () => {
  const [backendResponsive, setBackendResponsive] = useState(true);
  useEffect(() => {
    axiosInstance
      .get("v1/site-detail/find")
      .then((response) => {
        setBackendResponsive(true);
      })
      .catch((error) => {
        setBackendResponsive(false);
      });
  }, []);
  return (
    <div>{backendResponsive ? <AppLayoutWithServer /> : <Applayout />}</div>
  );
};

export default ChooseWhatTo;
