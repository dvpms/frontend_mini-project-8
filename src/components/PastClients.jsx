// src/components/PastClients.jsx

import React from "react";
import Spotify from "../assets/images/HomePage/spotify.svg";

const PastClients = () => {
  const clients = [
    Spotify, "https://via.placeholder.com/150", 
    "https://via.placeholder.com/150", "https://via.placeholder.com/150", 
    "https://via.placeholder.com/150", "https://via.placeholder.com/150", 
    "https://via.placeholder.com/150", "https://via.placeholder.com/150"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-0 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-0 p">
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative border-1 border-gray-300" // Add border for each image
          >
            <img
              src={client}
              alt={`Client ${index + 1}`}
              className="h-full object-fit"
            />
            {/* Vertical border for each column except the last one */}
            {index % 4 !== 3 && (
              <div className="absolute top-0 right-0 w-[1px] bg-gray-300 h-full" />
            )}
            {/* Horizontal border for each row except the last one */}
            {index < 4 && (
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastClients;
