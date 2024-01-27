import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useGetStaff } from "../../hooks/staff/useStaff";
import { DOC_URL } from "../../api/axiosInterceptor";

const Team = () => {
  const { data, isLoading } = useGetStaff();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
        {data?.data?.map((data, index) => {
          return (
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 140, width: "210px" }}
                image={`${DOC_URL}${data?.user?.imageUrl}`}
                title="green iguana"
              />
              <CardContent sx={{ height: "80px" }}>
                <Typography gutterBottom variant="h6" component="div">
                  {data?.user?.fullName}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: "underline", color: "blue" }}
                >
                  {data?.user?.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Post : <b>{data?.position}</b>
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
