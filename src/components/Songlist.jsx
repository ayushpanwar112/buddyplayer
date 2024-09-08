import React, { useContext } from "react";
import { PlayerContext } from "../context/Playercontext";

const Songlist = ({ name, image, desc, id }) => {
  const {playWithId} = useContext(PlayerContext);

  return (
    <div
      onClick={() => {
        playWithId(id);
      }}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer"
    >
      <img className="rounded" src={image} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200">{desc}</p>
    </div>
  );
};

export default Songlist;
