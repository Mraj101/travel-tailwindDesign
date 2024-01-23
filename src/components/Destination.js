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
    <div className="p-7">
      <div className="flex items-center flex-col justify-center">
        <div>
          <h1>Choose Your Destination</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            nostrum totam alias, veniam pariatur accusantium tenetur cum cumque
            explicabo ad est beatae neque, facere at. Voluptates et eveniet
            doloribus ea.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <img
                src={MaldivImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="col-span-1">
              <img
                src={IndonesiaImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-9">
            <div className=" col-span-3">
              <img
                src={SrilankaImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="col-span-4">
              <img
                src={NorthAmericaImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="col-span-2">
              <img
                src={KashmirImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-3">
              <img
                src={BangladeshImg}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="col-span-5">
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
