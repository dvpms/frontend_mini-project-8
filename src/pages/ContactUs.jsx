import React from "react";
import PastClients from "../components/PastClients";
import SuccessMetrics from "../components/SuccessMetrics";
import Hero from "../assets/images/ContactUs/Hero.png";
import Office from "../assets/images/ContactUs/Office.png";
import SideImage from "../assets/images/ContactUs/SideImage.png";

const ContactUs = () => {
  return (
    <div className="">
      <div
        className="relative w-full h-screen bg-cover bg-[#FDCA09] bg-cen ter"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      ></div>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="hidden lg:block p-20">
              <img
                src={SideImage}
                alt="Contact"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-right">
                We'd love to hear <br />from you
              </h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Website URL*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Project Details*"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 uppercase tracking-wider"
                >
                  Send Proposal
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-4xl text-center font-bold m-10">
              Come stop by our office sometime
            </h3>
            <div className="relative">
              <img
                src={Office}
                alt="Office"
                className="w-full h-auto rounded-md"
              />
              <div className="absolute bottom-0 left-0 my-8 ml-8 bg-white p-6 rounded-md shadow-md">
                <p>
                  New York, USA <br />
                  7626 W. 18th St, <br />
                  Massapequa, NY 11758 <br />
                  info@bsgny.com <br />
                  (543)890 98
                </p>
                <a
                  href="#"
                  className="block mt-4 text-blue-600 hover:text-blue-800"
                >
                  GET DIRECTIONS &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <SuccessMetrics />
      </div>
      <div className="px-40 py-28">
        <h2 className="text-4xl font-bold text-center mx-auto w-[70%] mb-5 ">
          We worked with the world’s biggest brands and the most innovative
          startups
        </h2>
        <PastClients />
      </div>
    </div>
  );
};

export default ContactUs;
