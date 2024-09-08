
import './App.css'
import Siderbar from './components/Siderbar'
import Player from "./components/Player"
import Display from './components/Display'
import { useContext } from 'react'
import { PlayerContext } from './context/Playercontext'

function App() {
   const {audioRef,track} = useContext(PlayerContext)

  return (
    <>
    <div className='bg-gray-800 h-screen'>
      <div className='h-[90%] flex'>
        <Siderbar/>
         <Display/>
      </div> 
         <Player/>
         <audio  ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
      
    </>
  )
}

export default App
