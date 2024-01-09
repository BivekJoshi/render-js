import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Ilets from "../../assets/ielts.png";

const NewsEvents = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right, #3C9FD9, #F4773F, rgb(222, 195, 184))",
        padding: "1rem",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ borderBottom: "2px solid orange" }}>
          News & Update
        </Typography>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} lg={3}>
          <img src={Ilets} style={{width:'100%',height:'100%'}}/>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <Typography variant="h5">
            "Revolutionary Changes to IELTS Exam Format Unveiled: What Every
            Test-Taker Needs to Know"
          </Typography>
          <br />
          <Typography>
            In a groundbreaking move, the International English Language Testing
            System (IELTS) has announced significant changes to its exam format,
            sending ripples of excitement and curiosity throughout the community
            of aspiring test-takers. The alterations, set to take effect from
            [insert date], aim to enhance the overall testing experience and
            better evaluate candidates' language proficiency in real-life
            scenarios.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} ag={2}>
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{
              height: "100%",
            }}
          >
            <Box sx={{color:"orange",border:'1px solid orange',padding:'.7rem',backgroundColor:'#fff'}}>
            <Typography variant="h5">Lets Talk</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsEvents;
