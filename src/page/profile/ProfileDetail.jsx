import React from "react";
import DonutChart from "../../components/chart/DonutChart";
import { Avatar, AvatarGroup, Grid, Typography } from "@mui/material";
import { useGetStaff } from "../../hooks/staff/useStaff";
import { DOC_URL } from "../../api/axiosInterceptor";

const ProfileDetail = () => {
  const { data: staffData, isLoading } = useGetStaff();
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
            <b>Teachers</b>
          </Typography>
          <br />
          <AvatarGroup>
            {staffData?.data?.map((data, index) => {
              return (
                <Avatar
                  alt={data?.user?.fullName}
                  src={DOC_URL + data?.user?.imageUrl}
                  sx={{ width: 56, height: 56 }}
                />
              );
            })}
          </AvatarGroup>
          <Typography
            variant="h5"
            sx={{
              marginTop: "4rem",
              padding: "1rem",
              borderBottom: "1px solid black",
              cursor: "pointer",
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
