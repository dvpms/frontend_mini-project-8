import React from "react";
import Hero from "../assets/images/AboutUs/Hero.png";
import PastClients from "../components/PastClients";
import SuccessMetrics from "../components/SuccessMetrics";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Esther Howard",
      role: "Founder",
      linkedin: "#",
      instagram: "#",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      name: "Cody Fisher",
      role: "Developer",
      linkedin: "#",
      instagram: "#",
      image: "https://example.com/cody-fisher.jpg",
    },
    {
      name: "Brooklyn Simmons",
      role: "Designer",
      linkedin: "#",
      instagram: "#",
      image: "https://example.com/brooklyn-simmons.jpg",
    },
  ];

  return (
    <div className="">
      <div
        className="relative w-full h-[116vh] bg-cover bg-[#FDCA09] bg-cen ter"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      ></div>
      <div className="p-16 space-y-10">
        <h2 className="text-4xl font-bold">Who We Are</h2>
        <p className="w-[630px] text-2xl">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
        <div className="flex items-center justify-center">
          <img
            src="https://picsum.photos/300/200?random=1"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Meet the heroes behind the magic
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className=" p-4 rounded-lg shadow-md"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-gray-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINKEDIN ↗
                    </a>
                    <a
                      href={member.instagram}
                      className="text-gray-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      INSTAGRAM ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
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

export default AboutUs;
