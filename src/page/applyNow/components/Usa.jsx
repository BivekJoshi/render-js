import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Usalogo from "../../../assets/Usalogin.png";

const Usa = () => {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#fff", padding: "0" }}>
      <Grid item xs={6}>
        <Box sx={{ width: "cover", height: "616px" }}>
          <img
            src={Usalogo}
            alt="Login Side Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid
          container
          direction="column"
          gap="2rem"
          padding="0 8rem"
          // justifyContent="center"
          // alignItems="center"
        >
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Welcome
          </Typography>
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <Button
            variant="contained"
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Usa;
