import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./countrystyle.css";
import { useGetCountry } from "../../hooks/country/useCountry";
import FormModal from "../../components/modal/FormModal";
import RegistationForm from "../Form/Ragistation/RegistationForm";
import { DOC_URL } from "../../api/axiosInterceptor";

const NewCountry = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const { data: countryData, isLoading } = useGetCountry();

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

  const handleButtonClick = () => {
    setOpenRegisterModal(true);
  };

  return (
    <Box sx={{ backgroundColor: "#fff", padding: "1rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ borderBottom: "2px solid orange" }}>
          Study Abroad
        </Typography>
      </Grid>
      <br />
      <br />
      {countryData?.map((data, index) => {
        return (
          <div key={index}>
            <Grid
              container
              spacing={2}
              sx={{ marginBottom: "2rem" }}
              key={data?.id}
            >
              <Grid item xs={12} md={2} lg={2}>
                <img
                  src={`${DOC_URL}${data?.imagePath}`}
                  alt="AboutUs"
                  style={{ width: "100%", height: "90%" }}
                  className="countryImg"
                />
              </Grid>
              <Grid item xs={12} md={7} lg={7}>
                <Typography variant="h1">
                  Study in {data?.countryName}
                </Typography>
                <Typography varianat="h6">
                  {data?.countryDescription}
                </Typography>
                {/* <ul>
                  {data?.list?.map((item, index) => {
                    return (
                      <li key={index}>
                        <Typography variant="h6">{item.text}</Typography>
                      </li>
                    );
                  })}
                </ul> */}
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    height: "100%",
                  }}
                >
                  <Typography variant="h6">
                    Interested for Study in {data?.countryName} ?
                  </Typography>
                  <br />
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      background:
                        "linear-gradient(to right, rgb(255, 78, 2), rgb(242, 186, 162))",
                      padding: ".7rem 1.4rem",
                      borderRadius: ".7rem",
                    }}
                    onClick={handleButtonClick}
                  >
                    Apply Now
                  </Button>
                  <br />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>
          </div>
        );
      })}
      {openRegisterModal && (
        <FormModal
          title="Apply now"
          open={openRegisterModal}
          onClose={() => setOpenRegisterModal(false)}
          formComponent={
            <RegistationForm onClose={() => setOpenRegisterModal(false)} />
          }
        />
      )}
    </Box>
  );
};

export default NewCountry;
