import React from "react";
import NewAboutUs from "./AboutUs/NewAboutUs";
import NewGoal from "./AboutUs/NewGoal";
import { useGetSiteDetail } from "../../hooks/siteDetail/useSiteDetail";
import { Box, CircularProgress } from "@mui/material";

const NewAboutFinal = () => {
  const { data, isLoading } = useGetSiteDetail();
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <NewAboutUs data={data}/>
      <NewGoal data={data}/>
    </>
  );
};

export default NewAboutFinal;
