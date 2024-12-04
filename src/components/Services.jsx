// src/components/Services.jsx
import React from "react";
import briefcaseIcon from "../assets/icon/HomePage/briefcase.svg";
import penToolIcon from "../assets/icon/HomePage/pen-tool-2.svg";
import scrollIcon from "../assets/icon/HomePage/scroll.svg";
import searchIcon from "../assets/icon/HomePage/search-normal.svg";

const servicesData = [
  {
    title: "EXCEPTIONAL DESIGN",
    icon: (
      <img src={briefcaseIcon} alt="Briefcase Icon" className="w-12 h-12" />
    ),
  },
  {
    title: "IN-DEPTH RESEARCH",
    icon: <img src={searchIcon} alt="Search Icon" className="w-12 h-12" />,
  },
  {
    title: "PRODUCT MANAGEMENT",
    icon: <img src={penToolIcon} alt="Pen Tool Icon" className="w-12 h-12" />,
  },
  {
    title: "NO-CODE DEVELOPMENT",
    icon: <img src={scrollIcon} alt="Scroll Icon" className="w-12 h-12 " />,
  },
];
const Services = () => {
  return ( 
    <div className="max-w-6xl mx-auto py-12 px-6 space-y-36">
      <div className="flex justify-center space-x-11">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className=" rounded-lg p-5 flex flex-col items-center hover:shadow-lg transition duration-300 ease-in-out hover:border"
          >
            <div className="text-4xl mb-4 opacity-85">{service.icon}</div>
            <h3 className="text-lg font-semibold mt-8">{service.title}</h3>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <p className="text-6xl font-bold text-right
        ">
          <span className="text-yellow-400">hello</span>.</p>
        <p className="text-3xl text-right font-bold pe-12">Award winning <br /> agency specializing <br /> in creative design</p>
        <div className="flex flex-col">
          <p className="text-lg">We help businesses grow, launch products and build enduring relationships with our communities.</p>
          <a href="http://
          " target="_blank" rel="noopener noreferrer" className="text-black underline text-xl font-semibold mt-5"> OUR INFO</a>

        </div>
      </div>
    </div>
  );
};

export default Services;
