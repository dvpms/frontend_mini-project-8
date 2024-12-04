import React from "react";
import Portfolio from "../components/Home/Portfolio";
import Testimonials from "../components/Home/Testimonials";
import Services from "../components/Home/Services";
import OurProcess from "../components/Home/OurProcess";
import PastClients from "../components/Home/PastClients";

const Home = () => {
  return (
    <>
    <div className="bg-gray-50">

      <Services />
      <Portfolio />
      <OurProcess />
      <Testimonials />
      <PastClients/>
    </div>
    </>
  );
};

export default Home;
