import React from "react";
import { assets } from "../assets/assets";
const Siderbar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white lg:flex hidden">
      <div className="bg-zinc-600 h-[15%] rounded flex flex-col justify-around">
        <div className="flex item-center gap-3 pl-8 cursor-pointer">
          <img className="w-5" src={assets.home_icon} />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex item-center gap-3 pl-8 cursor-pointer">
          <img
            className="w-5"
            src={assets.search_icon}
            placeholder="no image found"
          />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-zinc-600 h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={assets.stack_icon}
              className="w-8"
              placeholder="no image found"
            />
            <p className="font-semibold">your library</p>
          </div>
          <div className="flex items-center gap-6">
            <img src={assets.arrow_icon} className="w-5" />
            <img src={assets.plus_icon} className="w-5" />
          </div>
        </div>
        <div className="P-4 bg-black m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-5">
          <h1 className="mt-1 ">Create your own buddylist</h1>
          <p className="text-gray-400">save your favourite Song</p>
          <button className="bg-white rounded-full text-black px-4 py-1.5 text-[15px] mt-4 mb-2  ">
            Add
          </button>
        </div>
        <div className="P-4 bg-black m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-5">
          <h1 className="mt-1 ">Let explore some Broadcast</h1>
          <p className="text-gray-400">Keep with the your Buddy</p>
          <button className="bg-white rounded-full text-black px-4 py-1.5 text-[15px] mt-4 mb-2  ">
            Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default Siderbar;
