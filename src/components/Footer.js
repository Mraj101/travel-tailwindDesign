import React from "react";

const Footer = () => {
  return (
    <div className="p-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex text-xl font-bold gap-2">
            <img src="" alt="" />
            <h1>Hero</h1>
            <span className="text-orange-500">Travel</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut
            veritatis quibusdam minus reprehenderit eos aliquam magni dolorum
            sunt fuga.
          </p>
        </div>
        <div className="w-[75%] border border-gray-200"></div>
        <div className="w-10 h-10 border border-black"></div>
        <p>2017, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
