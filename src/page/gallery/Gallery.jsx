import React from "react";
import CardNews from "./Carroussel/CardNews";
import Carroussel from "./Carroussel/Carroussel";
import { Box, Grid, Typography } from "@mui/material";
import "./Carroussel/cardStyle.css";

const testimonialTitleStyles = {
  borderBottom: "2px solid orange",
};

const LIST = [
  {
    id: 1,
    studentName: "Subin Ratna Tuladar",
    Info:
      "Exceeded our expectations with insightful strategies that propelled our business to new heights.",
  },
  {
    id: 2,
    studentName: "Manoj Kumar",
    Info:
      "Thank You Render International Education for Support and Mentorship.",
  },
  {
    id: 3,
    studentName: "Bivek Joshi",
    Info:
      "Demonstrated proficiency in a wide range of technologies and IT systems.",
  },
  {
    id: 4,
    studentName: "Sagar Rijal",
    Info:
      "Proven track record of successfully managing IT projects from initiation to completion.",
  },
  {
    id: 5,
    studentName: "Ganesh Bhatt",
    Info:
      "Capacity to introduce and implement innovative IT solutions to enhance efficiency.",
  },
];
const Gallery = () => {
  return (
    <Box sx={{ padding: "1rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Typography variant="h5" sx={testimonialTitleStyles}>
          Student Testimonials
        </Typography>
      </Grid>
      <br />
      <br />
      <Typography
        variant="h1"
        sx={{ fontFamily: "Lavishly Yours", color: "#199BEA",display:'flex',justifyContent:'center' }}
      >
        Stories From our Students
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ width: "100%", overflow: "hidden", backgroundColor: "#fff" }}
        >
          <Carroussel
            cards={LIST.map((dataMap, index) => ({
              key: index + 1,
              content: (
                <CardNews
                  studentName={dataMap?.studentName}
                  quotes={dataMap?.Info}
                />
              ),
            }))}
            height="400px"
            width="100%"
            margin="0 0"
            offset={10}
            showArrows={false}
          />
        </Box>
      </div>
    </Box>
  );
};

export default Gallery;
