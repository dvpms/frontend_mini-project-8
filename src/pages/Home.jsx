import React from "react";
import Portfolio from "../components/Home/Portfolio";
import Testimonials from "../components/Home/Testimonials";
import Services from "../components/Home/Services";
import OurProcess from "../components/Home/OurProcess";
import PastClients from "../components/PastClients";
import BlogPosts from "../components/Home/BlogPosts";
import Hero from "../assets/images/HomePage/Hero-Home.png";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        {/* Hero Content */}
        <div
          className="relative w-full h-screen bg-cover bg-[#FDCA09] bg-center"
          style={{
            backgroundImage: `url(${Hero})`,
          }}
        >
          <div className=" flex flex-col justify-center items-start ms-52 text-center h-full">
            <h2 className="text-8xl font-bold text-left mb-4 w-[770px] text-black">
              Let’s Create Something Great Together.
            </h2>
            <a
              href="#book-call"
              className="px-6 py-2 text-black text-lg rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              Book a Free Call →
            </a>
          </div>
        </div>

        <Services />
        <Portfolio />
        <OurProcess />
        <Testimonials />
        <div className="opacity-60 p-40">
          <PastClients />
        </div>
        <BlogPosts />
      </div>
    </>
  );
};

export default Home;
