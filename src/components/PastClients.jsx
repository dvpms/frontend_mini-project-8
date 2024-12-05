// src/components/PastClients.jsx

import React from "react";

import Spotify from "../assets/images/PastClients/spotify.svg";
import Dropbox from "../assets/images/PastClients/Dropbox.svg";
import Google from "../assets/images/PastClients/Google.svg";
import Airbnb from "../assets/images/PastClients/Airbnb.svg";
import Artwork from "../assets/images/PastClients/Artwork.svg";
import DHL from "../assets/images/PastClients/dhl.svg";
import Tesla from "../assets/images/PastClients/tesla.svg";
import Stripe from "../assets/images/PastClients/stripe.svg";

 
const PastClients = () => {
  const clients = [
    Spotify,
    Dropbox,
    Tesla,
    Artwork,
    Google,
    Stripe,
    DHL,
    Airbnb,
  ];

  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-0 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-0">
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative border-1 border-gray-300 p-5" // Add border for each image
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
