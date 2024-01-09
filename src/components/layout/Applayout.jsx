import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import FooterInfo from "../footer/FooterInfo";
import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "../../theme";
import "./font-family.css";
const Applayout = () => {
  const theme = useMemo(() => createTheme(themeSettings()));
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={{ position: "fixed", zIndex: 100, width: "100%" ,top:0}}>
          <Navbar />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{ margin: "0px 2rem", position: "relative" }}
          className="main"
        >
          <Outlet />
        </div>
        <div>
        <FooterInfo style={{width:"100%"}}/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Applayout;
