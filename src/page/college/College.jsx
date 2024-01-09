import React from "react";
import college1 from "../../assets/College/college1.png";
import college2 from "../../assets/College/college2.png";
import college3 from "../../assets/College/college3.png";
import college4 from "../../assets/College/college4.png";
import college5 from "../../assets/College/college5.png";
import college6 from "../../assets/College/college6.png";
import { Grid, Typography } from "@mui/material";

const logo = [
  { id: 4, college: college4 },
  { id: 5, college: college5 },
  { id: 6, college: college6 },
  { id: 1, college: college1 },
  { id: 2, college: college2 },
  { id: 3, college: college3 },
];

const College = () => {
  return (
    <Grid container spacing={4}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ borderBottom: "2px solid orange" }}>
          Our Associated Colleges
        </Typography>
        <Typography
            variant="h1"
            sx={{ fontFamily: "Lavishly Yours", color: "#199BEA" }}
          >
            Universities and Colleges
          </Typography>
      </Grid>
      {logo.map((data, index) => {
        return (
          <Grid
            item
            xs={4}
            md={3}
            lg={2}
            key={index}
            justifyContent="center"
            alignItems="center"
          >
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={data?.college}
                style={{ height: "100%", width: "100%" }}
                alt={`College ${data.id}`}
              />
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default College;
