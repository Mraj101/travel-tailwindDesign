import React from "react";
import MaldivImg from "../assets/maldives.png";
import IndonesiaImg from "../assets/indonesia.png";
import SrilankaImg from "../assets/srilanka.png";
import NorthAmericaImg from "../assets/northamerica.png";
import KashmirImg from "../assets/kashmir.png";
import BangladeshImg from "../assets/bangladesh.png";
import BandarbanImg from "../assets/bandarban.png";

const Destination = () => {
  return (
    <div className="p-12">
      <div className="flex items-center flex-col justify-center">
      <div>
          <h1 className="text-black text-4xl font-bold text-center pb-5">Choose Your Destination</h1>
          <p className="text-gray-700 text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            nostrum totam alias, veniam pariatur accusantium tenetur cum cumque
            explicabo ad est beatae neque, facere at. Voluptates et eveniet
            doloribus ea.
          </p>
        </div>

        <div className="flex flex-col gap-5 ">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1 transform transition duration-300 hover:scale-105">
              <img
                src={MaldivImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="col-span-1 transform transition duration-300 hover:scale-105">
              <img
                src={IndonesiaImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-9 gap-5 ">
            <div className=" col-span-3 transform transition duration-300 hover:scale-105">
              <img
                src={SrilankaImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="col-span-4 transform transition duration-300 hover:scale-105">
              <img
                src={NorthAmericaImg}
                alt="img"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <div className="col-span-2 transform transition duration-300 hover:scale-105">
              <img
                src={KashmirImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-9 gap-5">
            <div className="col-span-4 transform transition duration-300 hover:scale-105">
              <img
                src={BangladeshImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="col-span-5 transform transition duration-300 hover:scale-105">
              <img
                src={BandarbanImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
