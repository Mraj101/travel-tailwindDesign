import React from "react";
import MountainImg from "../assets/mountain.png";

const PopularTour = () => {
  return (
    <div className="flex items-center justify-center p-7">
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2 gap-10 font-mulish">
          <h1 className="text-3xl font-bold">Our Popular Tours</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, cum tempore fuga quidem nostrum consequatur unde ratione cumque et ad doloribus velit inventore repudiandae optio exercitationem laboriosam perferendis voluptas sed voluptate error corporis. Pariatur, possimus cupiditate quia dolorem eligendi qui.
          </p>
          <ul className=" list-disc pl-10 ">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis quam accusantium non nam saepe repellat veniam, dolorum ipsam cupiditate, molestias est consequatur? Aliquam distinctio vitae, architecto tenetur necessitatibus dolorum voluptatem enim ipsam nam accusantium esse est minima harum aliquid molestias, ad et ea nobis unde laudantium deleniti? Eaque, tempore!
          </p>
          <button className="bg-orange-700 w-28 p-1 rounded-md ml-7">
            Read More
          </button>
        </div>
        <div>
          <img src={MountainImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default PopularTour;
