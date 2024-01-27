import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "../../theme";
import "./font-family.css";
import SpeedDiall from "../SpeedDial/SpeedDial";
import { useGetLoggedInUserDetail } from "../../hooks/auth/useAuth";
import NewFooterInfo from "../footer/NewFooterInfo";

const AppLayoutWithServer = () => {
  const { data } = useGetLoggedInUserDetail();
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
          <NewFooterInfo style={{ width: "100%", position: "fixed" }} />
        </div>
        {data?.userType === "STUDENT" ? <SpeedDiall /> : ""}
      </div>
    </ThemeProvider>
  );
};

export default AppLayoutWithServer;
