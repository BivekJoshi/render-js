import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import I1 from "../../assets/Teacher/I1.jpg";
import I2 from "../../assets/Teacher/I2.jpg";
import I3 from "../../assets/Teacher/I3.jpeg";
import I4 from "../../assets/Teacher/I4.png";
import I5 from "../../assets/Teacher/I5.png";
import I6 from "../../assets/Teacher/I6.jpeg";
import I7 from "../../assets/Teacher/I7.jpg";
import I8 from "../../assets/Teacher/I8.jpeg";

const LIST = [
  {
    img: I1,
    name: "Barbi Tilija",
    email: "Barbi.render@gmail.com",
  },
  {
    img: I2,
    name: "Sudeep Parajuli",
    email: "Render.admission@gmail.com",
  },
  {
    img: I3,
    name: "Prasand Thapa",
    email: "Amprasad.render@gmail.com",
  },
  {
    img: I4,
    name: "Prakash Thapa",
    email: "info@render.edu.np, Render.iec@gmail.com",
  },
  {
    img: I5,
    name: "Sita Thapa",
    email: "Admission.render@gmail.com",
  },
  {
    img: I6,
    name: "Astina khatri",
    email: "Render.frontdesk@gmail.com",
  },
  {
    img: I7,
    name: "Riya Thapa",
    email: "Admission.render@gmail.com",
  },
  {
    img: I8,
    name: "Kiran G.C",
    email: "Admission.render@gmail.com",
  },
  // {
  //   img: I9,
  //   name: "Riya Thapa",
  //   email: "Admission.render@gmail.com",
  // },
];
const Team = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", padding: "1rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ borderBottom: "2px solid orange" }}>
          Our Team
        </Typography>
      </Grid>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {LIST.map((data, index) => {
          return (
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 140, width: "210px" }}
                image={data?.img}
                title="green iguana"
              />
              <CardContent sx={{height:'80px'}}>
                <Typography gutterBottom variant="h5" component="div">
                  Name: {data?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data?.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Post : CEO */}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Box>
  );
};

export default Team;
