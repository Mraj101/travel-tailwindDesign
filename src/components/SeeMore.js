import React from 'react'
import SeeMoreImg from "../assets/seemore.png"
const SerrMore = () => {
  return (
    <div className="flex items-center justify-center p-12">
    <div className="flex justify-between">
      <div className="flex flex-col w-3/5 gap-5 font-mulish">
        <h1 className="text-3xl font-bold">A Simple Perfect place to Get Lost</h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, cum tempore fuga quidem nostrum consequatur undue eoloribus velit inventore repudiandae optio exercitationem laboriosam perf
        </p>
        <ul className=" list-disc pl-10 ">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
        
        <button className="bg-orange-700 w-28 p-1 rounded-md ml-7">
          Read More
        </button>
      </div>
      <div className="ml-10">
        <img src={SeeMoreImg} alt="img" />
      </div>
    </div>
  </div>
  )
}

export default SerrMore