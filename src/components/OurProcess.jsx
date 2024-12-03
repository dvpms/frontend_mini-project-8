import React from "react";
import SideImg from "../assets/images/HomePage/side-image.svg";

const OurProcess = () => {
  return (
    <>
      <div className=" flex px-52 py-32">
        <div className="side-image flex-1 max-w-[50%]">
          <img src={SideImg} alt="Side Image" className="w-full h-auto" />
        </div>
        <div className="flex-1 max-w-[50%]">
          <h2 className="text-4xl mb-6 font-bold">A simple, yet <br /> effective three step process.</h2>
          <ul className="space-y-8">
            <li className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 mr-6">
                <img
                  src="icon1.png"
                  alt="Icon 1"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">Step One</h3>
                <p className="text-lg text-gray-600">
                  This is the description for the first step of the process.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 mr-6">
                <img
                  src="icon2.png"
                  alt="Icon 2"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">Step Two</h3>
                <p className="text-lg text-gray-600">
                  This is the description for the second step of the process.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 mr-6">
                <img
                  src="icon3.png"
                  alt="Icon 3"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">Step Three</h3>
                <p className="text-lg text-gray-600">
                  This is the description for the third step of the process.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center m-5 p-5 text-xl font-normal"
      >
        Wherever you are in your journey, we’d love to hear from you.{" "}
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
