import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Goal from "./AboutUs/Goal";
import { useGetSiteDetail } from "../../hooks/siteDetail/useSiteDetail";

const AboutFinal = () => {
  const { data: siteData, isLoading } = useGetSiteDetail();
  return (
    <>
      <AboutUs siteData={siteData?.data} isLoading={isLoading}/>
      <Goal />
    </>
  );
};

export default AboutFinal;
