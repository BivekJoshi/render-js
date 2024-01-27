import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "../../../assets/AboutUs1.png";
import "./cardStyle.css";
import { DOC_URL } from "../../../api/axiosInterceptor";

const CardNews = ({
  studentName,
  quotes,
  scholarship,
  studentImage,
  university,
  visaDate,
}) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  console.log(studentName, "data masdvsdcsdcsdc");

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
            minHeight: "6rem",
            minWidth: "13rem",
          }}
        >
          {!isXsScreen ? (
            <Typography
              variant="h6"
              sx={{ color: "#fff", textAlign: "center" }}
            >
              {quotes}
            </Typography>
          ) : (
            <Typography
              variant="h7"
              sx={{ color: "#fff", textAlign: "center" }}
            >
              {quotes}
            </Typography>
          )}
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
          {studentImage ? (
            <img
              src={`${DOC_URL}${studentImage}`}
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              alt="About Us"
            />
          ) : (
            <img
              src={Image}
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              alt="About Us"
            />
          )}
        </div>
      </Box>

      <CardContent>
        {!isXsScreen ? (
          <Typography variant="h4" sx={{ fontWeight: "550" }}>
            {studentName}
          </Typography>
        ) : (
          <Typography variant="h6" sx={{ fontWeight: "550" }}>
            {studentName}
          </Typography>
        )}
        {!isXsScreen ? (
          <Typography variant="h6">
            {university}
            <br />
            {scholarship} Scholarship
            <br />
            {visaDate}
          </Typography>
        ) : (
          <Typography variant="h7">
            {university}
            <br />
            {scholarship} Scholarship
            <br />
            {visaDate}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CardNews;
