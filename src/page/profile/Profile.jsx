import React, { useEffect } from "react";
import { useGetLoggedInUserDetail } from "../../hooks/auth/useAuth";
import { Box, Divider, Grid, Paper, Typography, styled } from "@mui/material";
import LoggedInUserPhoto from "../../../src/assets/AboutUs1.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import ProfileDetail from "./ProfileDetail";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(237, 237, 237)",
  padding: ".4rem",
  // textAlign: 'center',
  color: "black",
  display: "flex",
  gap: ".5rem",
  margin: ".7rem",
}));

const Profile = () => {
  const { data, isLoading } = useGetLoggedInUserDetail();

  useEffect(() => {
    if (data && data?.data && data?.data?.userType) {
      localStorage.setItem("userType", data.data.userType);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box sx={{ backgroundColor: "#fff", padding: "1rem" }}>
          <div
            style={{
              weight: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems:'center'
            }}
          >
            <img
              src={LoggedInUserPhoto}
              alt="Photo"
              style={{ weight: "100%", height: "100%", borderRadius: "50%" }}
            />
          </div>
          <br/>
          <div style={{padding:"0 1rem"}}>
          <Typography variant="h3">{data?.data?.fullName}</Typography>
          <Typography variant="h5">{data?.data?.userType}</Typography>
          </div>
          <Item>
            <LocationOnIcon />
            <Typography variant="h5">Address: {data?.data?.address}</Typography>
          </Item>
          <Item>
            <MailOutlineIcon />
            <Typography variant="h5">{data?.data?.email}</Typography>
          </Item>
          <Item>
            <PhoneIcon />
            <Typography variant="h5">{data?.data?.mobileNumber}</Typography>
          </Item>
          <Divider />
          <Item>
            <Typography variant="h5">
              Date of Birth: {data?.data?.dateOfBirth}
            </Typography>
          </Item>
          <Item>
            <Typography variant="h5">Gender : {data?.data?.gender}</Typography>
          </Item>
          <Item>
            <Typography variant="h5">District : {data?.data?.location}</Typography>
          </Item>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ backgroundColor: "#fff", padding: "1rem" }}>
          <ProfileDetail />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
