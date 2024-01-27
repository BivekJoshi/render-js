import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import AboutUs1 from "../../../assets/AboutUs1.png";
import "../Style/aboutStyle.css";

const NewAboutUs = ({ data }) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  function renderParagraphAsList(paragraph) {
    const sentences = paragraph.split(".").map((sentence) => sentence.trim());
    return (
      <ul>
        {sentences.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </ul>
    );
  }
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
              {data?.quote}
            </Typography>
          </Grid>
        )}
        <Grid item xs={12} md={12} lg={7}>
          {!isXsScreen && (
            <Typography
              variant="h1"
              sx={{ fontFamily: "Lavishly Yours", color: "#199BEA" }}
            >
              {data?.quote}
            </Typography>
          )}
          {renderParagraphAsList(data?.aboutUsDescription1)}
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

export default NewAboutUs;
