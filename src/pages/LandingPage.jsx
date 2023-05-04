import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Card from "../components/Cards";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Overview />
      <Card />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
