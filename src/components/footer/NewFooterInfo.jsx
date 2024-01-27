import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Logo from "../../assets/logoWhite.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import Facebook from "../../assets/Icon/facebook.png";
import Insta from "../../assets/Icon/insta.png";
import IconP from "../../assets/Icon/P@.png";
import Youtube from "../../assets/Icon/youtube.png";
import { useGetSiteDetail } from "../../hooks/siteDetail/useSiteDetail";

const SERVICE = [
  { id: 1, text: "Career Counselling" },
  { id: 2, text: "Interview Preparation" },
  { id: 3, text: "Educational Courses" },
  { id: 4, text: "University Selection" },
  { id: 5, text: "TOFEL" },
  { id: 6, text: "PTE" },
  { id: 7, text: "ILETS" },
];
const DESTINATION = [
  { id: 1, text: "Study in Australia" },
  { id: 2, text: "Study In Czech Republic" },
  { id: 3, text: "Study in Korea" },
  { id: 4, text: "Study in Usa" },
];

const NewFooterInfo = () => {
  const { data: siteData, isLoading } = useGetSiteDetail();
  console.log(siteData?.data,"data");
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom, #199BEA, #feb47b)",
        marginTop: "60px",
        color: "#fff",
        padding: "3rem 4rem",
        bottom: 0,
        // width:"100%"
      }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          md={4}
          lg={4}
          sx={{ gap: "1rem", display: { xs: "12", lg: "block" } }}
        >
          <div className="image" style={{ width: "210px" }}>
            <img src={Logo} style={{ width: "100%", height: "100%" }} />
          </div>
          <br />
          <br />
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            Render International Education <br />
            Consultancy Pvt.Ltd.
          </Typography>
          <br />
          <Grid container direction="row" alignItems="center">
            <LocationOnIcon />{" "}
            <Typography variant="h7">
              Near Machhapuchre Bank
              <br /> Putalisadak-29, Kathmandu
            </Typography>
          </Grid>

          <br />
          <br />
          <Grid container direction="row" alignItems="center">
            <CallIcon />{" "}
            <Typography variant="h7">
              +977 015908821 , <br />
              +977 9860199796
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          sx={{ gap: "1rem", display: { xs: "none", lg: "block" } }}
        >
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            Our Services
          </Typography>
          {SERVICE?.map((data, index) => {
            return (
              <div key={index}>
                <Typography variant="h7" key={index}>
                  {data?.text}
                </Typography>
                <br />
                <br />
              </div>
            );
          })}
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          sx={{ gap: "1rem", display: { xs: "none", lg: "block" } }}
        >
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            Study Destination
          </Typography>
          {DESTINATION?.map((data, index) => {
            return (
              <div key={index}>
                <Typography
                  variant="h7"
                  key={index}
                  sx={{ marginBottom: "1rem" }}
                >
                  {data?.text}
                </Typography>
                <br />
                <br />
              </div>
            );
          })}
          <br />
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            Follow us on :-
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ display: "flex", gap: "2rem", cursor: "pointer" }}
          >
            <img src={Facebook} />
            <img src={Insta} />
            <img src={IconP} />
            <img src={Youtube} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewFooterInfo;
