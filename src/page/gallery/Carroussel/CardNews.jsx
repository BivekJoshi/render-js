import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import Image from "../../../assets/AboutUs1.png";
import './cardStyle.css'

const CardNews = ({studentName,quotes}) => {
  const theme = useTheme();

  return (
    <Card>
      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, #F4773F, #3C9FD9)",
          padding: "0",
          position: "relative",
          marginBottom: "1.8rem",
          [theme.breakpoints.up("sm")]: {
            width: "15rem",
            height: "6rem",
          },
          [theme.breakpoints.up("md")]: {
            width: "20rem", 
            height: "10rem",
          },
          [theme.breakpoints.up("lg")]: {
            width: "20rem", 
            height: "10rem",
          },
        }}
      >
        <div
          style={{
            padding: ".5rem",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h6" sx={{ color: "#fff", textAlign: "center" }}>
            {quotes}
          </Typography>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "50%",
            transform: "translate(-50%, 50%)",
            width: "90px",
            height: "90px",
            [theme.breakpoints.up("sm")]: {
              width: "90px",
              height: "6px",
            },
            [theme.breakpoints.up("md")]: {
              width: "90px", 
              height: "90px",
            },
            [theme.breakpoints.up("lg")]: {
              width: "90px", 
              height: "90px",
            },
          }}
          className="img"
        >
          <img
            src={Image}
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            alt="About Us"
          />
        </div>
      </Box>

      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: "550" }}>
        {studentName}
        </Typography>
        <Typography variant="h6">MIT University</Typography>
        <Typography variant="p">700$ Scholarship</Typography>
      </CardContent>
    </Card>
  );
};

export default CardNews;
