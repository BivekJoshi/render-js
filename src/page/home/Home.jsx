import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CarouselEffect from "../../components/carousel/CarouselEffect";
import AboutUs from "../aboutUs/AboutUs/AboutUs";
import Countries from "../countries/Countries";
import NewsEvents from "../newsEvents/NewsEvents";
import StudyService from "../studyService/StudyService";
import College from "../college/College";
import Courses from "../courses/Courses";
import Gallery from "../gallery/Gallery";

const Home = () => {
  return (
    <>
      <CarouselEffect />
      <br />
      <AboutUs />
      <br />
      <Courses/>
      <br/>
      <Countries />
      <br />
      <StudyService/>
      <br/>
      <Gallery/>
      <br/>
      <br/>
      <College/>
      <br/>
      <NewsEvents />
    </>
  );
};

export default Home;
