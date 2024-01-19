import React, { useState, useEffect, useRef, useContext } from "react";
import { Email, LocalPhone } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Tooltip,
} from "@mui/material";
import { Chip, ClickAwayListener, Grow, Stack } from "@mui/material";
import { MenuItem, MenuList, Paper, Popper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileImage from "../../assets/AboutUs1.png";
import { DOC_URL } from "../../api/axiosInterceptor";

const StudentCard = ({ name, mobileNumber, email, userType, imageUrl }) => {
  const navigate = useNavigate();

  const imageFinal = imageUrl ? DOC_URL + imageUrl : "";
  return (
    <>
      <Box>
        <Card
          grow={true}
          style={{
            textAlign: "center",
            padding: "1rem 1.5rem",
            backgroundColor: "white",
          }}
        >
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              {/* <Button
                variant="outlined"
                sx={{
                  marginTop: "5px",
                  fontSize: ".7rem",
                  padding: "1px 12px",
                  margin: "0 0.4rem",
                }}
                //   onClick={() => {
                //     navigate(`edit/${EmployeeId}`);
                //     // handleClose();
                //   }}
              >
                Edit
              </Button> */}
            </Grid>
          </Box>

          <Stack
            sx={{
              textAlign: " -webkit-center",
              marginTop: "1rem",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/studentProfile`);
              // handleClose();
            }}
          >
            <CardMedia
              component="img"
              src={imageFinal}
              alt="Img"
              sx={{ width: 66, height: 66, borderRadius: "2rem" }}
            />
            <Typography
              style={{ fontWeight: 700, margin: "1rem 0", fontSize: "20px" }}
            >
              <Chip
                sx={{
                  bgcolor: "white",
                  fontSize: "1rem",
                  width: "100%",
                }}
                label={
                  <Typography
                    variant="h6"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      textTransform: "capitalize",
                    }}
                  >
                    {name}
                  </Typography>
                }
              />
            </Typography>

            <Box padding={"0 1rem"}>
              <Typography variant="body2" gutterBottom>
                <Tooltip title="helo">
                  <Badge color="success" badgeContent={userType} />
                </Tooltip>
              </Typography>
            </Box>
          </Stack>

          <Stack
            style={{
              fontSize: ".9rem",
            }}
          >
            <Box
              backgroundColor={"#f5f5f5"}
              padding=".5rem"
              borderRadius=".5rem"
            >
              <Stack
                // onClick={handleOpenEmailform}
                spacing={{ xs: 1 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                alignItems="center"
              >
                <Email sx={{ fontSize: "1.2rem" }} />
                <Chip
                  sx={{
                    bgcolor: "#f5f5f5",
                    fontSize: "1rem",
                    width: "80%",
                    justifyContent: "flex-start",
                    padding: "0",
                  }}
                  label={
                    <Typography
                      variant="p"
                      style={{
                        margin: "10px 0 0 -12px",
                        fontSize: ".85rem",
                      }}
                    >
                      {email}
                    </Typography>
                  }
                />
              </Stack>

              <Stack
                spacing={{ xs: 1 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                alignItems="center"
              >
                <LocalPhone sx={{ fontSize: "1.2rem" }} />
                <Typography
                  variant="p"
                  style={{ margin: "10px 0", fontSize: ".85rem" }}
                >
                  {mobileNumber}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default StudentCard;
