import React from "react";
import DonutChart from "../../components/chart/DonutChart";
import { Avatar, Grid, Typography } from "@mui/material";

const ProfileDetail = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <DonutChart
          dataValue="25"
          title="Total Course Completed"
          subTitle="Course Complete"
        />
        <br />
        <DonutChart
          dataValue="85"
          title="Total Attendance"
          subTitle="Course Attendance"
        />
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="p">Joined since Jan 2020</Typography>
          <br />
          <Typography variant="h5">
            <b>Teachers (5)</b>
          </Typography>
          <br />
          <div style={{ display: "flex", gap: "1rem" }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </div>
          <Typography
            variant="h5"
            sx={{
              marginTop: "4rem",
              padding: "1rem",
              borderBottom: "1px solid black",
              cursor:"pointer"
            }}
          >
            Study Materials Links
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileDetail;
