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
      <br />
      <AboutUs />
      <br />
      <br />
      <Courses/>
      <br/>
      <br/>
      <Countries />
      <br />
      <br />
      <StudyService/>
      <br/>
      <br/>
      <Gallery/>
      <br/>
      <br/>
      <br/>
      <br/>
      <College/>
      <br/>
      <br/>
      <NewsEvents />
    </>
  );
};

export default Home;
