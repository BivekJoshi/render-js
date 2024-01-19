import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import { DOC_URL } from "../../../api/axiosInterceptor";
import ProfileImage1 from "../../../assets/RenderLogo.png";

const ProfileImage = ({ loggedinUserData }) => {
  return (
    <Grid>
      {loggedinUserData?.imageUrl ? (
        <img
          src={DOC_URL + loggedinUserData?.imageUrl}
          alt="Profile"
          height="135px"
          width="135px"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <img
          src={ProfileImage1}
          alt="Profile"
          height="135px"
          width="135px"
          style={{ borderRadius: "50%" }}
        />
      )}

      <LocalSeeIcon
        className="hover-effect"
        onClick={() => {
          setOpenEditModal(true);
        }}
        sx={{
          position: "absolute",
          bottom: "22%",
          left: "19%",
          width: "40px",
          height: "40px",
          color: "#947cb7",
          "&:hover": {
            color: "#784aba",
          },
        }}
      />
    </Grid>
  );
};

export default ProfileImage;
