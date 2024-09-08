import React, { useContext } from "react";
import { assets} from "../assets/assets";
import { PlayerContext } from "../context/Playercontext";

const Player = () => {
  const {seekBar,seekBg,playerStatus,play,pause,track,Time} = useContext(PlayerContext);
  const {next,previous,seekSong} = useContext(PlayerContext);
  return (
    <div className="h-[10%] flex items-center justify-between bg-black text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img src={track.image} className="w-12" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>{" "}
      <div className="flex  flex-col items-center gap-3 m-auto">
        <div className=" flex gap-3">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} />
          <img onClick={previous}className="w-4 cursor-pointer" src={assets.prev_icon} />
          {
            playerStatus?<img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} />:<img  onClick={play}className="w-4 cursor-pointer" src={assets.play_icon} />
          }
          
          
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} />
       
        </div>
        <div className="flex items-center gap-5">
             <p>{Time.currentTime.minute}:{Time.currentTime.second}</p>
             <div ref={seekBg} onClick={seekSong}className="w-[60vw] max-w-[500px] bg-white rounded-full cursor-pointer">
                <hr ref={seekBar}  className="h-1 border-none w-1 bg-red-600 rounded-full"/>
             </div>
               <p>{Time.totalTime.minute}:{Time.totalTime.second}</p>
             
        </div>
      </div>
      <div className="  hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.play_icon}/>
        <img className="w-4" src={assets.mic_icon}/>
        <img className="w-4" src={assets.speaker_icon}/>
        <img className="w-4" src={assets.queue_icon}/>
        <img className="w-4" src={assets.volume_icon}/>
        <div className="w-20 bg-white"></div>
      </div>
    </div>
  );
};

export default Player;
