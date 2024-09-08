import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navgate = useNavigate();
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-4'>
    <img onClick={()=>navgate(-1)} className="w-8 bg-slate-800 rounded-2xl cursor-pointer " src={assets.arrow_left}/>
    <img onClick={()=>navgate(+1)} className="w-8   bg-slate-800 rounded-2xl cursor-pointer"  src={assets.arrow_right}/>
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-orange-300 text-black text-[15px] rounded-2xl px-4 py-1 hidden md:block' >Check out more project</p>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
