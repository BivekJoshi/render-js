import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Home1 from "../../assets/Home1.png";
import Home2 from "../../assets/home2.png";
import Home3 from "../../assets/Home3.png";
import './main.css'

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home1,
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home2,
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home3,
  },
];

function CarouselEffect() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "500px",
        }}
        className="main"
      >
        <img
          src={images[activeStep].imgPath}
          alt={images[activeStep].label}
          style={{ width: "100%", height: "100%" }}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Box>
    </Box>
  );
}

export default CarouselEffect;
