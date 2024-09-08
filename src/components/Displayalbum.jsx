import React, { useContext } from 'react'

import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/Playercontext';


const Displayalbum = () => {
    const {id} = useParams();
           const albumData = albumsData[id];
           const {playWithId} = useContext(PlayerContext);
           
           console.log(albumData);
  return ( <>
    
    <div  className='flex m-10 gap-8 flex-col md:flex-row md:items-end'>
       <img className='w-28 rounded ' src={albumData.image}/>
       <div className='flex flex-col'>
        <p>Playlist</p>
        <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
        <h4>{albumData.desc}</h4>
        <div className='flex gap-30 mt-3'>
          <img  className=" w-10 rounded-full inline-block" src={assets.buddy_logo}/>
         <b>buddy</b>
         -12342 likes
         <b>20song</b>
        </div>
          
       </div>
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2'>
      <p>#<b className='mr-4'>title</b></p>
      <p >album</p>
      <p className='hidden sm:block'>dataAdded</p>
      <img className='m-auto w-4' src={assets.clock_icon}/>
    </div>
    <hr/>
    {
      songsData.map((item,index)=>(
        <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 item center hover:bg-red-700 rounded-2xl p-3 cursor-pointer'>

          <p className='text-white'>
             <b className='mr-4'>{index+1}</b>
             <img className='w-14 inline mr-4' src={item.image}/>
             {item.name}
          </p>
             <p className='text-[15px]'>{albumData.name}</p>
             <p className='text-[15px] text-stone-500 hidden sm:block'>4day ago</p>
             <p className='text-center'>{item.duration}</p>
        </div>
      ))
    }
  </> )
}

export default Displayalbum
