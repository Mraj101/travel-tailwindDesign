import React from "react";
import MountainImg from "../assets/mountain.png";

const PopularTour = () => {
  return (
    <div className="flex items-center flex-col md:flex-row md:justify-between md:p-12 w-full ">
      <div className="flex flex-col w-full md:gap-8 gap-3 font-mulish ">
        <h1 className="text-xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-7xl font-bold">Our Popular Tours</h1>
        <p className=" text-sm leading-6 md:text-base lg:text-base xl:text-lg 2xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, cum tempore fuga quidem nostrum consequatur undue eoloribus velit inventore repudiandae optio exercitationem laboriosam perf
        </p>
        <ul className="list-disc pl-4 md:pl-10 lg:pl-10 xl:pl-10 2xl:pl-10">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis quam accusantium non nam saepe ias, ad et ea nobis unde laudantium deleniti? Eaque, tempore!
        </p>
        <button className="bg-orange-700 w-28 md:w-28 lg:w-28 xl:w-32 2xl:w-36 p-1 rounded-md md:ml-7 lg:ml-7 xl:ml-7 2xl:ml-7">
          Read More
        </button>
      </div>
      <div className="mt-8 md:mt-0 md:ml-10 w-full">
        <img className="w-full md:w-auto" src={MountainImg} alt="img" />
      </div>
    </div>
  );
};

export default PopularTour;
