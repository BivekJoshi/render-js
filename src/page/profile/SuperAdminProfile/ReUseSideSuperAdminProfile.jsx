import { Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import ProfileButton from "../AdminProfile/ProfileButton";
import ProfileImage from "../AdminProfile/ProfileImage";
import Diversity1TwoToneIcon from "@mui/icons-material/Diversity1TwoTone";
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';

const labelStyle = {
  backgroundColor: "transparent",
  textTransform: "none",
  borderRadius: ".5rem",
  color: "black",
  display:'flex',
  alignItems:'flex-start'
};
const activeLabelStyle = {
  ...labelStyle,
  backgroundColor: "#98D8F1",
};

const ReUseSideSuperAdminProfile = ({ value, handleChange, loggedinUserData }) => {
  return (
    <>
      <Grid display="flex" flexDirection="column" gap="24px">
        <Grid
          display="flex"
          color="black"
          bgcolor="#fff"
          alignItems="center"
          gap="16px"
          justifyContent="space-evenly"
          borderRadius="6px"
          position="relative"
          padding="16px"
        >
          <ProfileImage loggedinUserData={loggedinUserData}/>
          <Grid display="flex" flexDirection="column" gap="8px">
            <Typography variant="h6">
              {loggedinUserData?.fullName}
            </Typography>
            <Typography variant="h7">
              {loggedinUserData?.email}
            </Typography>
            <Typography variant="h7">
              {loggedinUserData?.mobileNumber}
            </Typography>
            <ProfileButton userType={loggedinUserData?.userType} />
          </Grid>
        </Grid>

        <Grid
          p="24px"
          bgcolor="#fff"
          display="flex"
          flexDirection="column"
          gap="20px"
          borderRadius="8px"
          width="100%"
        >
          <Typography variant="h5" p="12px 0">
            General
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="lab API tabs example"
            orientation="vertical"
            indicatorColor="none"
          >
            <Tab
              label={
                <Grid
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Diversity1TwoToneIcon
                    fontSize="medium"
                    sx={{ color: "#1565C0" }}
                  />
                  <Typography variant="h7">Team</Typography>
                </Grid>
              }
              value="1"
              style={value === "1" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label={
                <Grid
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <SettingsSuggestTwoToneIcon
                    fontSize="medium"
                    sx={{ color: "#1565C0" }}
                  />
                  <Typography variant="h7">Site Control</Typography>
                </Grid>
              }
              value="2"
              style={value === "2" ? activeLabelStyle : labelStyle}
            />
          </Tabs>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
};

export default ReUseSideSuperAdminProfile;
