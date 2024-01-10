import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "../page/home/Home";
// import AboutUs from "../page/aboutUs/AboutUs";
import ContactUs from "../page/ContactUs/ContactUs";
import Countries from "../page/countries/Countries";
import Courses from "../page/courses/Courses";
import Gallery from "../page/gallery/Gallery";
import NewsEvents from "../page/newsEvents/NewsEvents";
import Applayout from "../components/layout/Applayout";
import AboutFinal from "../page/aboutUs/AboutFinal";
import LoginPage from "../page/auth/LoginPage";
import ApplyNow from "../page/applyNow/ApplyNow";
import Profile from "../page/profile/Profile";
import AdminProfile from "../page/profile/AdminProfile/AdminProfile";
import AuthRegistation from "../page/auth/AuthRegistation";
import ForgetPassword from "../page/auth/ForgetPassword";
import ResetPassword from "../page/auth/ResetPassword";
import Team from "../page/team/Team";
import StudentProfile from "../page/profile/StudentProfile.jsx/StudentProfile";

const AppRoutes = () => {
  return (
    <HashRouter hashType="slash">
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/authRegister" element={<AuthRegistation />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/ric/reset-password" element={<ResetPassword />} />
          <Route path="/applyNow" element={<ApplyNow />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutFinal />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/studentProfile" element={<StudentProfile />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news&events" element={<NewsEvents />} />
          <Route path="/adminProfile" element={<AdminProfile/>} />
          <Route path="/team" element={<Team/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
