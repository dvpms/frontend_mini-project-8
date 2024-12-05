import React from "react";
import Hero from "../assets/images/OurWorks/Hero.png";
import PastClients from "../components/PastClients";
import { Link } from "react-router-dom";

const OurWorks = () => {
  const works = [
    {
      id: 1,
      thumbnail: "https://picsum.photos/300/200?random=1",
      title: "Portfolio Title",
    },
    {
      id: 2,
      thumbnail: "https://picsum.photos/300/200?random=2",
      title: "JAZZ × 100",
    },
    {
      id: 3,
      thumbnail: "https://picsum.photos/300/200?random=3",
      title: "Rule Ratio",
    },
    {
      id: 4,
      thumbnail: "https://picsum.photos/300/200?random=4",
      title: "GOOD FOOD",
    },
    {
      id: 5,
      thumbnail: "https://picsum.photos/300/200?random=5",
      title: "The Gig Poster",
    },
    {
      id: 6,
      thumbnail: "https://picsum.photos/300/200?random=6",
      title: "Kizuna",
    },
  ];
  return (
    <div className="bg-gray-50">
      <div
        className="relative w-full h-[116vh] bg-cover bg-[#FDCA09] bg-center"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      ></div>
      <div className="feature-work p-28">
        <div className="title flex justify-between">
          <h2 className="text-4xl font-bold">Feature Work</h2>
          <p className="text-right font-semibold w-[30%]">
            We are an award-winning creative & design agency committed to
            excellence since forever.
          </p>
        </div>
        <div className="px-40 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {works.map((work) => (
              <Link key={work.id} to={`/ourworks/detail/${work.id}`}>
                <div className="relative shadow-lg overflow-hidden">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-4 px-6">
                    <h3 className="text-xl font-semibold text-white text-center">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>{" "}
        </div>
      </div>
      <div className="p-40">
        <h2 className="text-4xl font-bold text-center mx-auto w-[70%] mb-5 ">
          We worked with the world’s biggest brands and the most innovative
          startups
        </h2>
        <PastClients />
      </div>
    </div>
  );
};
export default OurWorks;
