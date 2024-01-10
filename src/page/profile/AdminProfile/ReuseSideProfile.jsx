import { Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileButton from "./ProfileButton";

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

const ReuseSideProfile = ({ value, handleChange, loggedinUserData }) => {
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
          <ProfileImage />
          <Grid display="flex" flexDirection="column" gap="8px">
            <Typography variant="h6">
              {loggedinUserData?.data?.fullName}
            </Typography>
            <Typography variant="h7">
              {loggedinUserData?.data?.email}
            </Typography>
            <Typography variant="h7">
              {loggedinUserData?.data?.mobileNumber}
            </Typography>
            <ProfileButton userType={loggedinUserData?.data?.userType} />
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
                <Grid>
                  <Typography variant="h7">Students</Typography>
                </Grid>
              }
              value="1"
              style={value === "1" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label={
                <Grid>
                  <Typography variant="h7">Country</Typography>
                </Grid>
              }
              value="2"
              style={value === "2" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label={
                <Grid>
                  <Typography variant="h7">University</Typography>
                </Grid>
              }
              value="3"
              style={value === "3" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label={
                <Grid>
                  <Typography variant="h7">Notice</Typography>
                </Grid>
              }
              value="4"
              style={value === "4" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label={
                <Grid>
                  <Typography variant="h7">Material</Typography>
                </Grid>
              }
              value="5"
              style={value === "5" ? activeLabelStyle : labelStyle}
            />
          </Tabs>
          <Divider />
          <Typography variant="h5" p="12px 0">
            Applications
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ display: "flex", flexDirection: "column" }}
            orientation="vertical"
            indicatorColor="none"
          >
            <Tab
              label={
                <Grid>
                  <Typography variant="h7">Applicants</Typography>
                </Grid>
              }
              value="6"
              style={value === "6" ? activeLabelStyle : labelStyle}
            />
          </Tabs>
        </Grid>
      </Grid>
    </>
  );
};

export default ReuseSideProfile;
