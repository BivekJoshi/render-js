import React, { lazy } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Applayout from "../components/layout/Applayout";
import { useGetLoggedInUserDetail } from "../hooks/auth/useAuth";
import ScrollToTop from "../utility/ScrollToTop";
import Loadable from "../components/loader/Loadable";
import ErrorPage from "../components/errorboundary/ErrorPage";

const LoginPage = Loadable(lazy(() => import("../page/auth/LoginPage")));
const ApplyNow = Loadable(lazy(() => import("../page/applyNow/ApplyNow")));
const Team = Loadable(lazy(() => import("../page/team/Team")));
const Home = Loadable(lazy(() => import("../page/home/Home")));
const AboutFinal = Loadable(lazy(() => import("../page/aboutUs/AboutFinal")));
const ContactUs = Loadable(lazy(() => import("../page/ContactUs/ContactUs")));
const Countries = Loadable(lazy(() => import("../page/countries/Countries")));
const Courses = Loadable(lazy(() => import("../page/courses/Courses")));
const Gallery = Loadable(lazy(() => import("../page/gallery/Gallery")));
const StudentProfile = Loadable(
  lazy(() => import("../page/profile/StudentProfile.jsx/StudentProfile"))
);
const NewsEvents = Loadable(
  lazy(() => import("../page/newsEvents/NewsEvents"))
);
const AdminProfile = Loadable(
  lazy(() => import("../page/profile/AdminProfile/AdminProfile"))
);
const SuperAdminProfile = Loadable(
  lazy(() => import("../page/profile/SuperAdminProfile/SuperAdminProfile"))
);
const AuthRegistation = Loadable(
  lazy(() => import("../page/auth/AuthRegistation"))
);
const ForgetPassword = Loadable(
  lazy(() => import("../page/auth/ForgetPassword"))
);
const ResetPassword = Loadable(
  lazy(() => import("../page/auth/ResetPassword"))
);
const ChangePassword = Loadable(
  lazy(() => import("../page/auth/ChangePassword"))
);

const AppRoutes = () => {
  const { data } = useGetLoggedInUserDetail();
  return (
    <HashRouter hashType="slash">
      <ScrollToTop>
        <Routes>
          <Route exact path="*" element={<ErrorPage />} />
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
