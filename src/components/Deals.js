import React from "react";
import UmbrellaImg from "../assets/umbrella.png";
import UmbrellaImg2 from "../assets/umbrella2.png";
import ClockImg from "../assets/clock.svg";
import GroupImg from "../assets/group.svg";
import LocationImg from "../assets/location.svg";
const Deals = () => {
  return (
    <div className="p-12 font-mulish">
      <div className="flex flex-col gap-8 ">
        <div className="flex items-center justify-center flex-col w-full gap-5">
          <h1 className="text-5xl font-bold ">Deals & Discount</h1>
          <p className="w-[75%] leading-6 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            dolorum ab consequuntur! Suscipit dolor exercitationem minima
            tempora error animi dolorem fugit distinctio quisquam ducimus
            sapiente, atque soluta aperiam ut aliquam tempore est qui? Aliquid
            perferendis consequatur velit obcaecati error aut.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="relative w-full">
            <div className="absolute top-0 left- w-full h-full bg-black opacity-10 border-2 border-red-500"></div>
            <div className="w-[500px] p-6 rounded-lg top-10 right-16 bg-white absolute opacity-80 flex flex-col gap-5">
              <div className="flex gap-2 w-full">
                <div className="flex gap-1">
                  <img src={ClockImg} alt="img" />
                  <h6>7 Day / 6 Night</h6>
                </div>
                <div className="flex gap-2">
                  <img src={GroupImg} alt="img" />
                  <h6>7 Day / 6 Night</h6>
                </div>
                <div className="flex gap-2">
                  <img src={LocationImg} alt="img" />
                  <h6>7 Day / 6 Night</h6>
                </div>
              </div>
              <h2>Tour To Satorini</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus quo tempore unde esse ut dolorum et ad, natus dolor
                animi perspiciatis officiis. Voluptatem, omnis? Nostrum dolorum
                dignissimos vitae ipsam et.
              </p>
              <p>Price: $1300-$1500</p>
              <button className="w-28 p-2 border bg-orange-500 rounded-lg">
                Book Now
              </button>
            </div>
            {/* <div className=" w-[400px] h-72 rounded-xl top-20 border-2 bgco border-red-500 absolute bg-white opacity-50 right-28"></div> */}
            <img  className="w-full"src={UmbrellaImg} alt="img" />
          </div>
          <div className="relative w-full border">
            <div className="absolute top-0 left- w-full h-full bg-yellow-700 opacity-20 border-4 border-red-500"></div>

            <div className="w-[500px] p-6 rounded-lg top-11 left-16 bg-white absolute opacity-80 opaci flex flex-col gap-5">
              <div className="flex gap-2 w-full">
                <div className="flex gap-1">
                  <img src={ClockImg} alt="img" />
                  <h6>7 Day / 6 Night</h6>
                </div>
                <div className="flex gap-2">
                  <img src={GroupImg} alt="img" />
                  <h6>7 Day / 6 Night</h6>
                </div>
                <div className="flex gap-2">
                  <img src={LocationImg} alt="img" />
                  <h6>7 Day / 6 Night</h6>
                </div>
              </div>
              <h2>Tour To Satorini</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus quo tempore unde esse ut dolorum et ad, natus dolor
                animi perspiciatis officiis. Voluptatem, omnis? Nostrum dolorum
                dignissimos vitae ipsam et.
              </p>
              <p>Price: $1300-$1500</p>
              <button className="w-28 p-2 border bg-orange-500 rounded-lg">
                Book Now
              </button>
            </div>
            <img  className="w-full"src={UmbrellaImg2} alt="img" />
          </div>
          <div className="relative">
          <div className="w-[500px] p-6 rounded-lg top-10 right-16 bg-white absolute opacity-80 flex flex-col gap-5">
              <div className="flex gap-2 w-full">
                <div className="flex gap-1">
                  <img src={ClockImg} alt="img" />
                  <h6>7 Day / 6 Night</h6>
                </div>
                <div className="flex gap-2">
                  <img src={GroupImg} alt="img" />
                  <h6>7 Day / 6 Night</h6>
                </div>
                <div className="flex gap-2">
                  <img src={LocationImg} alt="img" />
                  <h6>7 Day / 6 Night</h6>
                </div>
              </div>
              <h2>Tour To Satorini</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus quo tempore unde esse ut dolorum et ad, natus dolor
                animi perspiciatis officiis. Voluptatem, omnis? Nostrum dolorum
                dignissimos vitae ipsam et.
              </p>
              <p>Price: $1300-$1500</p>
              <button className="w-28 p-2 border bg-orange-500 rounded-lg">
                Book Now
              </button>
            </div>
            <img className="w-full" src={UmbrellaImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
