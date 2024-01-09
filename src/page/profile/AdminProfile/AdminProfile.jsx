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
import MenuIcon from "@mui/icons-material/Menu";
import ProfileImage from "./ProfileImage";
import ProfileButton from "./ProfileButton";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import Notice from "../../notice/Notice";
import AdminCountry from "../../countries/AdminCountry/AdminCountry";
import University from "../../university/University";
import Student from "../../Student/Student";
import Material from "../../material/Material";
import Registation from "../../Registation/Registation";

const labelStyle = {
  backgroundColor: "transparent",
  textTransform: "none",
  borderRadius: ".5rem",
  color: "black",
};
const activeLabelStyle = {
  ...labelStyle,
  backgroundColor: "#98D8F1",
};

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
          <Grid display="flex" flexDirection="column" gap="24px">
            <Grid
              display="flex"
              color="black"
              bgcolor="#fff"
              alignItems="center"
              gap="16px"
              justifyContent="space-evenly"
              borderRadius="6px"
              position="relative"
              padding="16px"
            >
              <ProfileImage />
              <Grid display="flex" flexDirection="column" gap="8px">
                <Typography variant="h6">Bivek Prasad Joshi</Typography>
                <Typography variant="h7">bvkjosi03@gmail.com</Typography>
                <Typography variant="h7">9865466989</Typography>
                <ProfileButton>Admin</ProfileButton>
              </Grid>
            </Grid>

            <Grid
              p="24px"
              bgcolor="#fff"
              display="flex"
              flexDirection="column"
              gap="20px"
              borderRadius="8px"
              width="100%"
            >
              <Grid display="flex" flexDirection="column">
                <Typography variant="h5" p="12px 0">
                  General
                </Typography>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{ display: "flex", flexDirection: "column" }}
                  orientation="vertical"
                  indicatorColor="none"
                >
                  {menuItems.map((item, index) => (
                    <Tab
                      key={index}
                      label={
                        <Grid>
                          <Typography variant="h7">{item.label}</Typography>
                        </Grid>
                      }
                      value={(index + 1).toString()}
                      style={
                        value === (index + 1).toString()
                          ? activeLabelStyle
                          : labelStyle
                      }
                    />
                  ))}
                </Tabs>
                <Divider />
                <Typography variant="h5" p="12px 0">
                  Applications
                </Typography>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{ display: "flex", flexDirection: "column" }}
                  orientation="vertical"
                  indicatorColor="none"
                >
                  <Tab
                    label={
                      <Grid>
                        <Typography variant="h7">Applications</Typography>
                      </Grid>
                    }
                    value="6"
                    style={value === "6" ? activeLabelStyle : labelStyle}
                  />
                </Tabs>
              </Grid>
            </Grid>
          </Grid>
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
                <Typography>Bivek Joshi</Typography>
              </div>
            </Tooltip>
          </IconButton>
        </div>

        <Drawer
          open={openDrawer}
          anchor={"left"}
          onClose={() => setOpenDrawer(false)}
          PaperProps={{
            sx: { width: "400px" },
          }}
          className="profileNavBar"
        >
          <Grid display="flex" flexDirection="column" gap="24px">
            <Grid
              display="flex"
              color="black"
              bgcolor="#fff"
              alignItems="center"
              gap="16px"
              justifyContent="space-evenly"
              borderRadius="6px"
              position="relative"
              padding="16px"
            >
              <ProfileImage />
              <Grid display="flex" flexDirection="column" gap="8px">
                <Typography variant="h6">Bivek Prasad Joshi</Typography>
                <Typography variant="h7">bvkjosi03@gmail.com</Typography>
                <Typography variant="h7">9865466989</Typography>
                <ProfileButton>Admin</ProfileButton>
              </Grid>
            </Grid>

            <Grid
              p="24px"
              bgcolor="#fff"
              display="flex"
              flexDirection="column"
              gap="20px"
              borderRadius="8px"
              width="100%"
            >
              <Grid display="flex" flexDirection="column">
                <Typography variant="h4" p="12px 0">
                  General
                </Typography>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{ display: "flex", flexDirection: "column" }}
                  orientation="vertical"
                  indicatorColor="none"
                >
                  {menuItems.map((item, index) => (
                    <Tab
                      key={index}
                      label={
                        <Grid>
                          <Typography variant="h7">{item.label}</Typography>
                        </Grid>
                      }
                      value={(index + 1).toString()}
                      style={
                        value === (index + 1).toString()
                          ? activeLabelStyle
                          : labelStyle
                      }
                    />
                  ))}
                </Tabs>
              </Grid>
            </Grid>
          </Grid>
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
      </TabContext>
    </Box>
  );
};

export default AdminProfile;
