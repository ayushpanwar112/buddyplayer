import React, { useEffect, useRef } from 'react'
import {Route, Routes, useLocation} from "react-router-dom"
import Displayhome from './Displayhome'
import Displayalbum from './Displayalbum'
import { albumsData } from '../assets/assets'

 
const Display = () => {
  const displayref =useRef();
  const location = useLocation();
  const isalbum = location.pathname.includes("album");
 
  const albumId = isalbum?location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumId)].bgColor;
  useEffect(()=>
  {
     if(isalbum)
     {
      displayref.current.style.background = `linear-gradient(${bgcolor},#121212)`
     }
     else {
                     displayref.current.style.background = `#121212`
     }
  }
  )
  console.log(bgcolor);
  return (
    <>
      <div ref={displayref}className='w-[100%] rounded m-2 px-6 pt-4 text-white lg:w-[75%] lg:ml-0 overflow-auto'> 
          <Routes>
            <Route path="/" element={<Displayhome/>}/>
            <Route path="/album/:id" element={<Displayalbum/>}/>
          </Routes>

      </div>
    </>
  )
}

export default Display
