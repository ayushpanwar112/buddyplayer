import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import Album from "./Album";
import { songsData } from "../assets/assets";
import Songlist from "./Songlist";

const Displayhome = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 ">
        <h1 className="font-bold my-2 text-2x1">Best buddy album Today</h1>
        <div className="overflow-auto flex">
          {albumsData.map((item, index) => (
            <Album
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
        <h2 className="font-bold text-2xl"> Best buddy app listen song</h2>
        <div className=" flex overflow-auto">
          {songsData.map((item, index) => (
            <Songlist key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Displayhome;
