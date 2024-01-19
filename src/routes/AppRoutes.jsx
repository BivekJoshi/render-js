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
import { useGetLoggedInUserDetail } from "../hooks/auth/useAuth";
import ChangePassword from "../page/auth/ChangePassword";
import SuperAdminProfile from "../page/profile/SuperAdminProfile/SuperAdminProfile";
import ScrollToTop from "../utility/ScrollToTop";

const AppRoutes = () => {
  const { data } = useGetLoggedInUserDetail();
  return (
    <HashRouter hashType="slash">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Applayout data={data?.data} />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/authRegister" element={<AuthRegistation />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route
              path="/change-password"
              element={<ChangePassword data={data?.data} />}
            />
            <Route path="/ric/reset-password" element={<ResetPassword />} />
            <Route path="/applyNow" element={<ApplyNow />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutFinal />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route
              path="/studentProfile"
              element={<StudentProfile data={data?.data} />}
            />
            <Route path="/countries" element={<Countries />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news&events" element={<NewsEvents />} />
            <Route
              path="/adminProfile"
              element={<AdminProfile data={data?.data} />}
            />
            <Route
              path="/superAdminProfile"
              element={<SuperAdminProfile data={data?.data} />}
            />
            <Route path="/team" element={<Team />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
};

export default AppRoutes;
