import React from "react";
import CardNews from "./Carroussel/CardNews";
import Carroussel from "./Carroussel/Carroussel";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import "./Carroussel/cardStyle.css";
import { useGetTestimonial } from "../../hooks/testimonial/useTestimonial";

const testimonialTitleStyles = {
  borderBottom: "2px solid orange",
};

const NewGallery = () => {
  const { data: testimonialData, isLoading } = useGetTestimonial();
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
    <Box sx={{ padding: "1rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Typography variant="h5" sx={testimonialTitleStyles}>
          Student Testimonials
        </Typography>
      </Grid>
      <br />
      <br />
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Lavishly Yours",
          color: "#199BEA",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Stories From our Students
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ width: "100%", overflow: "hidden", backgroundColor: "#fff" }}
        >
          <Carroussel
            cards={(testimonialData || [])?.map((dataMap, index) => ({
              key: index + 1,
              content: (
                <CardNews
                  studentName={dataMap?.student?.user?.fullName}
                  quotes={dataMap?.description}
                  scholarship={dataMap?.scholarship}
                  studentImage={dataMap?.student?.user?.imageUrl}
                  university={dataMap?.university?.name}
                  visaDate={dataMap?.visaDate}
                />
              ),
            }))}
            height="400px"
            width="100%"
            margin="0 0"
            offset={10}
            showArrows={false}
          />
        </Box>
      </div>
    </Box>
  );
};

export default NewGallery;
