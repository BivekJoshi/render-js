import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import AboutUs1 from "../../../assets/AboutUs1.png";
import "../Style/aboutStyle.css";
const list = [
  {
    id: 1,
    list: "We pride ourselves on offering tailor-made solutions",
  },
  {
    id: 2,
    list:
      " With a reputation built on trust and success, we are your reliable partner for educational guidance.",
  },
  {
    id: 3,
    list:
      "   Renowned for excellence, we stand proudly as one of the premier education consultancies in Nepal",
  },
  {
    id: 4,
    list:
      "As a leading consultancy in Nepal, we are dedicated to shaping your educational path with precision and care.",
  },
];

const AboutUs = ({ siteData, isLoading }) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "#fff", padding: "1rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ borderBottom: "2px solid orange" }}>
          About Us
        </Typography>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={5} md={12} lg={2}>
          <div
            className="img1"
            style={{
              width: !isXsScreen ? "200px" : "120px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={AboutUs1}
              alt="AboutUs"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Grid>
        {isXsScreen && (
          <Grid item xs={7}>
            <Typography
              variant="h3"
              sx={{ fontFamily: "Lavishly Yours", color: "#199BEA" }}
            >
              We are not only one of the best education consultancy in Nepal but
              also a reliable partner for educational guidance.
            </Typography>
          </Grid>
        )}
        <Grid item xs={12} md={12} lg={7}>
          {!isXsScreen && (
            <Typography
              variant="h1"
              sx={{ fontFamily: "Lavishly Yours", color: "#199BEA" }}
            >
              We are not only one of the best education consultancy in Nepal but
              also a reliable partner for educational guidance.
            </Typography>
          )}
          <ul>
            {list.map((item) => {
              return (
                <li key={item.id}>
                  <Typography variant="h6">{item.list}</Typography>
                </li>
              );
            })}
          </ul>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{
              height: "100%",
            }}
          >
            <Typography variant="h6">Interested to join ?</Typography>
            <br />
            <Box
              sx={{
                color: "orange",
                border: "1px solid orange",
                padding: ".7rem",
              }}
            >
              <Typography variant="h6">Let's Talk</Typography>
            </Box>
            <br />
            <Typography variant="h7">Learn More</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
