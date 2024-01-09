import React from "react";
import StudentCard from "../../../components/card/StudentCard";
import { Box, Grid } from "@mui/material";

const StudentGridView = (studentData) => {
  return (
    <Grid
      container
      item
      gap={1}
      className="project-card-control"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(285px, 1fr))",
        gap: "1rem",
      }}
    >
      {studentData?.studentData?.data?.data?.map((studentDetail) => {
        return (
          <Box sx={{ width: "20rem", display: "flex" }}>
            <StudentCard
              name={studentDetail?.user?.fullName}
              mobileNumber={studentDetail?.user?.mobileNumber}
              email={studentDetail?.user?.email}
              userType={studentDetail?.user?.userType}
              imageUrl={studentDetail?.user?.imageUrl}
            />
          </Box>
        );
      })}
    </Grid>
  );
};

export default StudentGridView;
