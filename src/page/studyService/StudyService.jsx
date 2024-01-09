import { Grid, Typography } from "@mui/material";
import React from "react";
import success1 from "../../assets/success 1.png";
import success2 from "../../assets/success 1 (1).png";
import success3 from "../../assets/success 1 (2).png";
import success4 from "../../assets/success 1 (3).png";

const logo = [
  { id: 1, success: success1, text: "Career Counselling" },
  { id: 2, success: success2, text: "Course Counselling" },
  { id: 3, success: success3, text: "University Counselling" },
  { id: 4, success: success4, text: "Degree Counselling" },
];

const StudyService = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ borderBottom: "2px solid orange" }}>
          Study Services
        </Typography>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        {logo?.map((data, index) => {
          return (
            <Grid item xs={6} md={3} key={index}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <div style={{ width: "30%", height: "30%" }}>
                  <img
                    src={data?.success}
                    alt={data?.text}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <br />
                <Typography variant="h7"><b>{data?.text}</b></Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default StudyService;
