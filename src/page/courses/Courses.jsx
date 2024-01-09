import React, { useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

const COURSELIST = [
  {
    id: 1,
    courseName: "ILETS",
    courseTitle:
      "We Guarantee to provide the best ILETS preparation class in Nepal",
    points: [
      { list: "Reality-Based Mock-ups" },
      { list: "Experienced Instructors" },
      { list: "Reflecting Practice" },
      { list: "Flexible Timing" },
      { list: "Well Equipped Classes" },
    ],
  },
  {
    id: 2,
    courseName: "TOFEL",
    courseTitle:
      "We Guarantee to provide the best TOFEL preparation class in Nepal",
    points: [
      { list: "Reality-Based Mock-ups" },
      { list: "Experienced Instructors" },
      { list: "Reflecting Practice" },
      { list: "Flexible Timing" },
      { list: "Well Equipped Classes" },
    ],
  },
  {
    id: 3,
    courseName: "SAT",
    courseTitle:
      "We Guarantee to provide the best SAT preparation class in Nepal",
    points: [
      { list: "Reality-Based Mock-ups" },
      { list: "Experienced Instructors" },
      { list: "Reflecting Practice" },
      { list: "Flexible Timing" },
      { list: "Well Equipped Classes" },
    ],
  },
];

const Courses = () => {
  const [hoverStates, setHoverStates] = useState(
    new Array(COURSELIST.length).fill(false)
  );

  const handleMouseOver = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseOut = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        padding: "2rem",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ borderBottom: "2px solid orange" }}>
          Study Courses
        </Typography>
      </Grid>
      <br />
      <br />
      <Grid container direction="row" alignItems="center">
        {COURSELIST.map((data, index) => {
          return (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                padding:"1rem"
              }}
            >
              <Box
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut(index)}
              >
                <Typography variant="h6">
                  {hoverStates[index] ? (
                    <Box
                      sx={{
                        padding: "1rem 2rem",
                        color: "#fff",
                        minWidth: "230px",
                        minHeight: "250px",
                        backgroundImage:
                          "linear-gradient(to right, #F4773F,#3C9FD9)",
                      }}
                    >
                      <Typography variant="h5">{data.courseTitle}</Typography>
                      <Divider />
                      <ul>
                        {data.points.map((listing, index) => {
                          return <li key={index}>{listing?.list}</li>;
                        })}
                      </ul>
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                      >
                        <Box
                          sx={{
                            background: "rgb(255, 103, 34)",
                            padding: "0.8rem 1.6rem",
                            width: "fit-content",
                            color: "#fff",
                            cursor: "pointer",
                            animation: "hoverAnimation 0.5s infinite",
                            "@keyframes hoverAnimation": {
                              "0%": { transform: "scale(1)" },
                              "50%": { transform: "scale(1.05)" },
                              "100%": { transform: "scale(1)" },
                            },
                          }}
                        >
                          Book Now
                        </Box>
                      </Grid>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        background: "rgb(255, 103, 34)",
                        padding: "1rem 2rem",
                        width: "fit-content",
                        color: "#fff",
                      }}
                    >
                      {data.courseName}
                    </Box>
                  )}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Courses;
