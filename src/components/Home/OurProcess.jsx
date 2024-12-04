import React from "react";
import SideImg from "../../assets/images/HomePage/side-image.svg";
import icon1 from "../../assets/images/HomePage/lamp.svg";
import icon2 from "../../assets/images/HomePage/exec.svg";
import icon3 from "../../assets/images/HomePage/rocket.svg";

const OurProcess = () => {
  return (
    <>
      <div className=" flex px-20 py-28 space-x-8">
        <div className="side-image flex-1 max-w-[50%]">
          <img src={SideImg} alt="Side Image" className="w-full h-auto" />
        </div>
        <div className="flex-1 max-w-[50%]">
          <h2 className="text-4xl mb-6 font-bold">
            A simple, yet <br /> effective three step process.
          </h2>
          <ul className="space-y-8">
            <li className="flex items-center justify-center">
              <div className="flex-shrink-0 w-14 h-auto mr-6 shadow-xl rounded-full flex items-center justify-center text-white p-2">
                <img src={icon1} alt="" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Idea Initiation</h3>
                <p className="text-sm text-gray-600">
                  For a start, we’ll uncover what makes you stand apart and
                  creatively position your brand and business.
                </p>
              </div>
            </li>
            <li className="flex items-center">
            <div className="flex-shrink-0 w-14 h-auto mr-6 shadow-xl rounded-full flex items-center justify-center text-white p-2">
            <img
                  src={icon2}
                  alt="Icon 2"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Execution</h3>
                <p className="text-sm text-gray-600">
                To deliver exceptionally, we dig deep into a brand’s essence and values, clearly understand them, then inject them into the design
                </p>
              </div>
            </li>
            <li className="flex items-center">
            <div className="flex-shrink-0 w-14 h-auto mr-6 shadow-xl rounded-full flex items-center justify-center text-white p-2">
            <img
                  src={icon3}
                  alt="Icon 3"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Launch</h3>
                <p className="text-sm text-gray-600">
                We provide full-service solutions to help you launch, market, and grow your business.                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center p-5 text-xl font-normal"
      >
        Wherever you are in your journey, we’d love to hear from you.
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          Book a free call
        </a>
      </p>
    </>
  );
};

export default OurProcess;
