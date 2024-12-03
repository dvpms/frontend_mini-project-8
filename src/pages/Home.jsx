import React from "react";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import OurProcess from "../components/OurProcess";

const Home = () => {
  return (
    <>
    <div className="bg-gray-50">

      <Services />
      <Portfolio />
      <OurProcess />
      <Testimonials />
    </div>
    </>
  );
};

export default Home;
