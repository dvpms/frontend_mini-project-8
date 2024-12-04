import React from "react";
import smsnotif from "../assets/images/HomePage/sms-notif.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-20 pb-10 pt-20">
      <div className="flex flex-col lg:flex-row justify-center mx-auto gap-10">
        <div className="space-y-12 w-full">
          <h2 className="text-4xl font-bold">dsgnr.</h2>
          <p>
            Dsgnr. is an award winning creative and design agency based in New
            York, USA.
          </p>
          <div className="border-2 flex items-center border-yellow-400 px-6 py-4 w-4/5">
            <img src={smsnotif} alt="" className="mx-3" />
            <p className="mx-auto">info@dsgnr.com</p>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold mb-5 text-xl">What We Do</h2>
          <ul className="text-lg space-y-2 pe-3">
            <li>
              <Link>Intro</Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Work</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex flex-col">
          <h2 className="font-semibold mb-5 text-xl">Who We Are</h2>
          <ul className="text-lg space-y-2 pe-3">
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>News</Link>
            </li>
            <li>
              <Link>Testimonials</Link>
            </li>

          </ul>
        </div>
      </div>
      <div className="flex justify-between text-xl mt-20">
        <div className="space-x-10">
          <a href="">Privacy Policy</a>
          <a href="">Terms</a>
        </div>
        <div className="media-social flex gap-10">
          <FaTwitter/>
          <FaFacebookF/>
          <FaGooglePlusG />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
