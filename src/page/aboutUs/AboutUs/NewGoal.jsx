import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import AboutUs2 from "../../../assets/AboutUs2.png";
import "./aboutStyle.css";
const list = [
  {
    id: 1,
    list: "Quality and Legal Compliance",
  },
  {
    id: 2,
    list: "Partnerships and Commercial Relationships",
  },
  {
    id: 3,
    list: "Customer Services",
  },
  {
    id: 4,
    list: "International Opportunities",
  },
  {
    id: 5,
    list: "National Contribution",
  },
  {
    id: 6,
    list: "Test Preparation",
  },
];
const NewGoal = ({data}) => {
  console.log(data, "data ho ma chaini ");
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Box sx={{ backgroundColor: "#fff", padding: "1rem" }}>
      <Typography
        variant="h1"
        sx={{ fontFamily: "Lavishly Yours", color: "#199BEA" }}
      >
        {data?.aboutUsTitle2}
      </Typography>
      <div style={{ padding: "0.5rem 1.5rem" }}>
        <Typography variant="h6">
          {data?.aboutUsDescription2}
        </Typography>
      </div>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginLeft: "1rem" }}
      >
        <Grid item xs={12} md={6} lg={6}>
          <Typography
            variant="h1"
            sx={{ fontFamily: "Lavishly Yours", color: "#199BEA" }}
          >
            Our Goals
          </Typography>
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
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              width: !isXsScreen ? "20rem" : "17rem",
              height: !isXsScreen ? "15rem" : "12rem",
            }}
            className="imageGoal"
          >
            <img
              src={AboutUs2}
              alt="AboutUs"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="h1"
        sx={{ fontFamily: "Lavishly Yours", color: "#199BEA" }}
      >
        what our Services
      </Typography>
      <div style={{ padding: "0.5rem 1.5rem" }}>
        <Typography variant="h7">
          Render International Education Consultancy PVT. LTD. will act as a
          bridge for prospective students looking to pursue a higher discipline
          at various colleges and/or universities in countries like Australia,
          New Zealand, the United States, the United Kingdom, Europa Countries
          and others. The knowledge and practical experience that international
          students acquire while studying abroad will have a Significant impact
          on their individual educational backgrounds and increase their chances
          of landing a permanent residence in addition to helping them and
          better-paying jobs in their home countries or on the global market
          when they successfully complete their theoretical and practical
          coursework
        </Typography>
      </div>
    </Box>
  );
};

export default NewGoal;
