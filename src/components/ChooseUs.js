import React from "react";
import MapImg from "../assets/map.png";
import TagImg from "../assets/tag.png";
import HotelImg from "../assets/hotel.png";

const ChooseUs = () => {
  return (
    <div className="p-12">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-black text-4xl font-bold">Why Choose us</h1>
          <p className="w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            explicabo nesciunt expedita. Reiciendis, dignissimos impedit
            praesentium dolorum iusto, obcaecati quo accusantium, animi mollitia
            eius perferendis reprehenderit esse omnis est? Cupiditate.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="border shadow-sm shadow-100 p-3 w-1/2 flex items-start flex-col gap-3">
            <img src={HotelImg} alt="img" className="w-20"/>
            <h1 className="text-black text-xl font-bold text-start">HandPicked Hotels</h1>
            <p className="text-black text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              dolor ducimus, rem corrupti architecto totam omnis quibusdam non
              quod possimus inventore! Neque, quam eos. Pariatur similique eum
              fuga fugiat totam.
            </p>
          </div>
          <div className=" border shadow-sm p-3 w-1/2 flex items-start flex-col gap-3">
          <img src={MapImg} alt="img" className="w-20"/>
            <h1 className="text-black text-xl font-bold text-start">HandPicked Hotels</h1>
            <p className="text-black text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              dolor ducimus, rem corrupti architecto totam omnis quibusdam non
              quod possimus inventore! Neque, quam eos. Pariatur similique eum
              fuga fugiat totam.
            </p>
          </div>
        </div>
        <div className="border shadow-sm p-3 w-1/2 flex items-start flex-col gap-3">
        <img src={TagImg} alt="img" className="w-20"/>
            <h1 className="text-black text-xl font-bold text-start">HandPicked Hotels</h1>
            <p className="text-black text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolor ducimus, rem corrupti architecto totam omnis quibusdam non
            quod possimus inventore! Neque, quam eos. Pariatur similique eum
            fuga fugiat totam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
