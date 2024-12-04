import React from "react";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import OurProcess from "../components/OurProcess";
import PastClients from "../components/PastClients";

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
