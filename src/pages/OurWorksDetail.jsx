import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../assets/images/OurWorksDetail/Hero.png";

const OurWorksDetail = () => {
  const { id } = useParams();

  const works = [
    {
      id: 1,
      thumbnail: "https://picsum.photos/300/200?random=1",
      title: "Portfolio Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      id: 2,
      thumbnail: "https://picsum.photos/300/200?random=2",
      title: "JAZZ × 100",
      description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      id: 3,
      thumbnail: "https://picsum.photos/300/200?random=3",
      title: "Rule Ratio",
      description: "Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.",
    },
  ];
  return (
    <div className="bg-gray-50">
      <div
        className="relative w-full min-h-lvh bg-cover bg-[#FDCA09] bg-left-bottom flex justify-center items-center"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <p className="text-center mx-auto text-6xl font-bold">
          We Work <br />
          with Love.
        </p>
      </div>
      <div className="px-40 py-32 space-y-12">
        <img src={works[id - 1].thumbnail} alt="" className="w-full"/>
        <p className="text-4xl font-bold">Portfolio Title</p>
        <p className="text-lg">{works[id - 1].description}</p>
      </div>
    </div>
  );
};

export default OurWorksDetail;
