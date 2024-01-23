import React from "react";
import MapImg from "../assets/map.png";
import TagImg from "../assets/tag.png";
import HotelImg from "../assets/hotel.png";

const ChooseUs = () => {
  return (
    <div className="p-12">
      <div className="flex flex-col items-center justify-center gap-10">
        <div>
            
        </div>
        <div class="flex gap-10">
          <div className="border-4 w-1/2">
            <img src={HotelImg} alt="img" />
            <h1>HandPicked Hotels</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              dolor ducimus, rem corrupti architecto totam omnis quibusdam non
              quod possimus inventore! Neque, quam eos. Pariatur similique eum
              fuga fugiat totam.
            </p>
          </div>
          <div className="border-4 w-1/2">
            <img src={MapImg} alt="img" className="w-10" />
            <h1>World Class Service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              dolor ducimus, rem corrupti architecto totam omnis quibusdam non
              quod possimus inventore! Neque, quam eos. Pariatur similique eum
              fuga fugiat totam.
            </p>
          </div>
        </div>
        <div className="w-1/2 border-4 border-rose-500">
          <img src={TagImg} alt="img" className="w-10"/>
          <h1>World Class Service</h1>
          <p>
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
