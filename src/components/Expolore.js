import React from "react";
import ExploreImg from "../assets/explore.png";

const Explore = () => {
  return (
    <div className="flex items-center justify-center p-16">
      <div className="relative">
        <img src={ExploreImg} alt="explore" />

        <div className="flex items-center justify-center flex-col absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-5 text-white">
          <div className="flex items-center justify-center flex-col gap-3 text-center">
            <h1 className="text-4xl font-bold">Explore Your Travel</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, doloremque quasi? Culpa rerum inventore harum?
            </p>
          </div>
          <div className="bg-blue-500 opacity-80 p-2 h-14 rounded-lg relative">
            <div className="flex items-center justify-center gap-2">
              <input className="rounded-lg p-1.5" type="text" placeholder="Where to go" />
              <input className="rounded-lg p-1.5" type="date" placeholder="When" />
              <div className="relative">
                <select className="rounded-lg p-1.5 appearance-none bg-transparent border-none text-white">
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                  role="img"
                  aria-label="select-icon"
                >
                  📌
                </span>
              </div>

              <button className="flex items-center rounded-lg p-1.5 bg-orange-500 w-28">
                <span role="img" aria-label="search-icon" className="mr-2">
                  🔍
                </span>
                Find Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
