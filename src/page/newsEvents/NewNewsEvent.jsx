import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Ilets from "../../assets/ielts.png";
import { useGetNoticeLatest } from "../../hooks/notice/useNotice";
import { DOC_URL } from "../../api/axiosInterceptor";

const NewNewsEvents = () => {
  const { data, isLoading } = useGetNoticeLatest();
  console.log(data);
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
          <img
            src={`${DOC_URL}${data?.data?.imagePath}`}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <Typography variant="h5">{data?.data?.title}</Typography>
          <br />
          <Typography variant="h5">Date: {data?.data?.endDateTime}</Typography>
          <br />
          <Typography>{data?.data?.description}</Typography>
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
            <Box
              sx={{
                color: "orange",
                border: "1px solid orange",
                padding: ".7rem",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <a href={data?.data?.redirectingUrl} style={{textDecoration:"none"}}>
                <Typography variant="h5" >Learn More</Typography>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewNewsEvents;
