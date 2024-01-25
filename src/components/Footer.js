import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 md:mt-0 p-4 md:p-12 bg-gray-100">
      <div className="gap-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex text-xl font-bold gap-2">
            <img src="" alt="" />
            <h1>Hero</h1>
            <span className="text-orange-500">Travel</span>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut
            veritatis quibusdam minus reprehenderit eos aliquam magni dolorum
            sunt fuga.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <a href="#" className="w-10 h-10  flex items-center justify-center">
            <FaFacebook />
          </a>
          <a href="#" className="w-10 h-10  flex items-center justify-center">
            <FaInstagram />
          </a>
          <a href="#" className="w-10 h-10  flex items-center justify-center">
            <FaTwitter />
          </a>
          <a href="#" className="w-10 h-10  flex items-center justify-center">
            <FaGithub />
          </a>
        </div>
        <div className="w-[75%] border border-gray-200 mt-4"></div>
        <p>2017, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
