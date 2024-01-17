import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Box, Container, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/RenderLogoFull.png";
import { removeUser } from "../../utility/cookieHelper";
import { DOC_URL } from "../../api/axiosInterceptor";

const navItem = [
  {
    id: 1,
    item: "Home",
    path: "/home",
  },
  {
    id: 2,
    item: "About Us",
    path: "/aboutus",
  },
  {
    id: 3,
    item: "Courses",
    path: "/courses",
  },
  {
    id: 4,
    item: "Countries",
    path: "/countries",
  },
  {
    id: 5,
    item: "Gallery",
    path: "/gallery",
  },
  {
    id: 6,
    item: "News & Events",
    path: "/news&events",
  },
  {
    id: 7,
    item: "Our Team",
    path: "/team",
  },
];

function Navbar({ data }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [activePage, setActivePage] = React.useState("/home");
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleActiveClick = (path, child) => {
    navigate(`${path}`);
    setActivePage(path);
  };
  const handleProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorEl(null);
  };
  const handleClickChangePassword = () => {
    navigate(`/change-password`);
    handleCloseProfile();
  };
  const handleClickProfile = () => {
    if (data?.userType === "ADMIN") {
      navigate(`/adminProfile`);
    } else if(data?.userType === "STUDENT"){
      navigate(`/studentProfile`);
    }else{
      navigate(`/superAdminProfile`);
    }

    handleCloseProfile();
  };
  const handleClickLogout = () => {
    removeUser();
    navigate(`/`);
    handleCloseProfile();
  };

  return (
    <Box sx={{ padding: ".5rem", background: "#E6E6E6" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              width: "363px",
              height: "60px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <img
              src={logo}
              alt="Ric Logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              // flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "space-between",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navItem.map((page) => (
                <MenuItem
                  key={page?.id}
                  onClick={(event) => {
                    handleActiveClick(page?.path, page?.subLinks);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center" variant="h5">
                    {page?.item}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src={logo}
              alt="Ric Logo"
              style={{ width: "160px", height: "50px" }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                display: "flex",
                // justifyContent: "center",
                gap: "2rem",
                alignItems: "center",
              },
            }}
          >
            {navItem.map((page) => (
              <Typography
                key={page?.id}
                onClick={(event) => {
                  handleActiveClick(page?.path, page?.subLinks);
                }}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                  fontWeight: "400",
                  cursor: "pointer",
                  borderBottom:
                    activePage === page?.path ? "3px solid orange" : "none",
                  "&:hover": {
                    transform: "scale(1.2)",
                    transition: "transform 0.2s ease-in-out",
                    fontWeight: "bold",
                  },
                }}
              >
                {page?.item}
              </Typography>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {data ? (
              <>
                <div onClick={handleProfile} style={{ cursor: "pointer" }}>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
                  >
                    <Avatar
                      alt={data?.fullName}
                      src={DOC_URL + data?.imageUrl}
                    />
                    <b style={{ color: "#1A75BD" }}>
                      {isXsScreen ? "" : data?.fullName}
                    </b>
                  </Typography>
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseProfile}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClickProfile}>My Profile</MenuItem>
                  <MenuItem onClick={handleClickChangePassword}>
                    Change Password
                  </MenuItem>
                  <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  animation: "hoverAnimation 0.5s infinite",
                  "@keyframes hoverAnimation": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                    "100%": { transform: "scale(1)" },
                  },
                  "&:hover": {
                    animation: "none",
                  },
                  background:
                    "linear-gradient(to right, rgb(255, 78, 2), rgb(242, 186, 162))",
                  padding: ".7rem 1.4rem",
                  borderRadius: ".7rem",
                }}
                onClick={() => navigate("/login")}
              >
                <b>Login</b>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
export default Navbar;
