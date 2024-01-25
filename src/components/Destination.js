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
    <div className="md:p-12">
      <div className="flex items-center flex-col justify-center gap-1">
        <div>
          <h1 className="text-black text-xl md:text-2xl lg:text-3xl xl:tex3xl 2xl:text-4xl font-bold text-center pb-2 md:pb-5">
            Choose Your Destination
          </h1>
          <p className="text-gray-700 text-center px-4 pb-2 md:px-0 md:pb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            nostrum totam alias, veniam pariatur accusantium tenetur cum cumque
            explicabo ad est beatae neque, facere at. Voluptates et eveniet
            doloribus ea.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="col-span-1 transform transition duration-300 hover:scale-105">
              <img
                src={MaldivImg}
                alt="img"
                className="h-40 w-full md:h-full object-cover rounded-xl"
              />
            </div>

            <div className="col-span-1 transform transition duration-300 hover:scale-105">
              <img
                src={IndonesiaImg}
                alt="img"
                className="h-40 w-full md:h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-9 gap-5 ">
            <div className=" md:col-span-3 transform transition duration-300 hover:scale-105">
              <img
                src={SrilankaImg}
                alt="img"
                className="h-40 w-full md:h-full object-cover rounded-xl"
              />
            </div>

            <div className="md:col-span-4 transform transition duration-300 hover:scale-105">
              <img
                src={NorthAmericaImg}
                alt="img"
                className="h-40 w-full md:h-full object-cover rounded-xl"
              />
            </div>
            <div className="md:col-span-2 transform transition duration-300 hover:scale-105">
              <img
                src={KashmirImg}
                alt="img"
                className="h-40 w-full md:h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-9 gap-5">
            <div className="md:col-span-4 transform transition duration-300 hover:scale-105">
              <img
                src={BangladeshImg}
                alt="img"
                className="h-40 w-full md:h-full object-cover rounded-xl"
              />
            </div>
            <div className="md:col-span-5 transform transition duration-300 hover:scale-105">
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
