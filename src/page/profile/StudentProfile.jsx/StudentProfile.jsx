import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { TabContext, TabPanel } from "@mui/lab";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

import ReUseSideStudentProfile from "./ReUseSideStudentProfile";
import ProfileDetail from "../ProfileDetail";


const StudentProfile = ({data:loggedinUserData}) => {
  const theme = useTheme();
  const [value, setValue] = useState("1");
  const [openDrawer, setOpenDrawer] = useState(false);

  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpenDrawer(false);
    window.scrollTo(0, 0);
  };

  return (
    <Box
      display="grid"
      gap="1rem"
      sx={{
        gridTemplateRows: isSm ? "4% 1fr" : "1fr",
        gridTemplateColumns: !isSm ? "2fr 10fr" : "1fr",
      }}
      color="black"
    >
      <TabContext value={value}>
        <Grid
          display="flex"
          flexDirection="column"
          gap="24px"
          sx={{
            display: isSm ? "none" : "flex",
          }}
        >
          <ReUseSideStudentProfile
            value={value}
            handleChange={handleChange}
            loggedinUserData={loggedinUserData}
          />
        </Grid>
        <div
          style={{
            display: isSm ? "flex" : "none",
            justifyContent: "flex-start",
          }}
        >
          <IconButton type="button" onClick={() => setOpenDrawer(true)}>
            <Tooltip title="Profile Menu">
              <div style={{ display: "flex" }}>
                <AccountCircleTwoToneIcon />
                <Typography>{loggedinUserData?.fullName}</Typography>
              </div>
            </Tooltip>
          </IconButton>
        </div>

        <Drawer
          open={openDrawer}
          anchor={"left"}
          onClose={() => setOpenDrawer(false)}
          PaperProps={{
            sx: { width: "320px" },
          }}
          className="profileNavBar"
        >
          <div style={{ backgroundColor: "#E6E6E6", padding: "12px" }}>
            <ReUseSideStudentProfile
              value={value}
              handleChange={handleChange}
              loggedinUserData={loggedinUserData}
            />
          </div>
        </Drawer>
        <TabPanel sx={{ p: 0 }} value="1">
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: ".5rem",
              padding: "1rem",
            }}
          >
            <ProfileDetail />
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default StudentProfile;
