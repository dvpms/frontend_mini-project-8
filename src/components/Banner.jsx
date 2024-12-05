import React from "react";
import hands from "../assets/images/HomePage/Hands.webp";

const Banner = () => {
  return (
    <>
      <div className="banner w-full py-10 bg-yellow-500 px-10 relative my-12">
        <div className="flex items-center justify-center  gap-10 mb-12">
          <div className="flex items-center">
            <p className="text-9xl text-white font-bold">dsgrn.</p>
          </div>
          <div className="text-4xl font-bold">
            <p>
              Grow Your Business. <br />
              Build Great Products.
            </p>
          </div>
          <button className="bg-black text-white px-8 py-5">Book a Free Call</button>
          <div className="absolute bottom-0 right-0"><img src={hands} alt="" className="w-72"/></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
