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
import Notice from "../../notice/Notice";
import AdminCountry from "../../countries/AdminCountry/AdminCountry";
import University from "../../university/University";
import Student from "../../Student/Student";
import Material from "../../material/Material";
import Registation from "../../Registation/Registation";
import { useGetLoggedInUserDetail } from "../../../hooks/auth/useAuth";
import ReuseSideProfile from "./ReuseSideProfile";
import AdminTeam from "../../team/AdminTeamView.jsx/AdminTeam";

const menuItems = [
  { label: "Students", component: <Student /> },
  { label: "Country", component: <AdminCountry /> },
  { label: "University", component: <University /> },
  { label: "Notice", component: <Notice /> },
  { label: "Material", component: <Material /> },
];

const AdminProfile = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");
  const [openDrawer, setOpenDrawer] = useState(false);

  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  const { data: loggedinUserData, isLoading } = useGetLoggedInUserDetail();

  const fullName = loggedinUserData?.data?.fullName;
  localStorage.setItem("fullName", fullName);

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
          <ReuseSideProfile
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
                <Typography>{loggedinUserData?.data?.fullName}</Typography>
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
          <div style={{backgroundColor:'#E6E6E6',padding:'12px'}}>
            <ReuseSideProfile
              value={value}
              handleChange={handleChange}
              loggedinUserData={loggedinUserData}
            />
          </div>
        </Drawer>

        {menuItems.map((item, index) => (
          <TabPanel sx={{ p: 0 }} value={(index + 1).toString()} key={index}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: ".5rem",
                padding: "1rem",
              }}
            >
              {item.component}
            </Box>
          </TabPanel>
        ))}
        <TabPanel sx={{ p: 0 }} value="6">
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: ".5rem",
              padding: "1rem",
            }}
          >
            <Registation />
          </Box>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="7">
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: ".5rem",
              padding: "1rem",
            }}
          >
            <AdminTeam />
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default AdminProfile;
