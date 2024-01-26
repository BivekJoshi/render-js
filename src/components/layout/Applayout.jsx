import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import FooterInfo from "../footer/FooterInfo";
import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "../../theme";
import "./font-family.css";
import SpeedDiall from "../SpeedDial/SpeedDial";

const Applayout = ({ data }) => {
  const theme = useMemo(() => createTheme(themeSettings()));
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={{ position: "fixed", zIndex: 100, width: "100%", top: 0 }}>
          <Navbar data={data} />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div
          style={{
            maxWidth: "100%",
            height: "100%",
            margin: "0px 2rem",
            position: "relative",
          }}
          className="main"
        >
          <Outlet />
        </div>
        <div>
          <FooterInfo style={{ width: "100%", position: "fixed" }} />
        </div>
        {data?.userType === "STUDENT" ? <SpeedDiall /> : ""}
      </div>
    </ThemeProvider>
  );
};

export default Applayout;
