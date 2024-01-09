import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import USA from "../../assets/USA.png";
import Austrilia from "../../assets/Austrilia.png";
import "./countrystyle.css";
import { useGetCountry } from "../../hooks/country/useCountry";
import FormModal from "../../components/modal/FormModal";
import RegistationForm from "../Form/Ragistation/RegistationForm";

const CountryInfoList = [
  {
    id: 1,
    countryName: "USA",
    countryImg: USA,
    list: [
      {
        text:
          "Unlimited scripts on watchlistThe USA is renowned for its globally acclaimed universities, offering diverse and cutting-edge programs that foster innovation and critical thinking.",
      },
      {
        text:
          "Additionally, international students benefit from a multicultural environment, gaining exposure to different perspectives and enhancing their overall educational experience.",
      },
      {
        text:
          "We are dedicated to providing comprehensive support to students aspiring to pursue their education in the USA .",
      },
      {
        text:
          "Ensuring not only academic success but also guiding them toward a fulfilling and prosperous career through personalized assistance and resources.",
      },
    ],
  },
  {
    id: 2,
    countryName: "Australia",
    countryImg: Austrilia,
    list: [
      {
        text:
          "Australia is recognized for its high-quality education system, featuring world-class universities and vocational institutions.",
      },
      {
        text:
          "We are dedicated to providing comprehensive support to students aspiring to pursue education in Australia",
      },
      {
        text:
          "Studying in Australia offers students a globally relevant education and a unique cultural experience, making it an excellent choice for international students",
      },
      {
        text:
          "Australia is home to several top-ranked universities known for their academic excellence and rigorous standards.",
      },
    ],
  },
];

const Countries = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const { data: countryData } = useGetCountry();

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
      {CountryInfoList?.map((data, index) => {
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
                  src={data?.countryImg}
                  alt="AboutUs"
                  style={{ width: "100%", height: "90%" }}
                  className="countryImg"
                />
              </Grid>
              <Grid item xs={12} md={7} lg={7}>
                {/* <div
                  style={{
                    color: "#199BEA",
                    fontSize: 40,
                    fontFamily: "Lavishly Yours",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                > */}
                <Typography variant="h1">
                  Study in {data?.countryName}
                </Typography>
                {/* </div> */}
                <ul>
                  {data?.list?.map((item, index) => {
                    return (
                      <li key={index}>
                        <Typography variant="h6">{item.text}</Typography>
                      </li>
                    );
                  })}
                  {/* {data?.countryDescription} */}
                </ul>
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
            </Grid>
          </div>
        );
      })}
      {openRegisterModal && (
        <FormModal
          title="Apply now"
          open={openRegisterModal}
          onClose={()=>setOpenRegisterModal(false)}
          formComponent={
            <RegistationForm onClose={()=>setOpenRegisterModal(false)}/>
          }
        />
      )}
    </Box>
  );
};

export default Countries;
