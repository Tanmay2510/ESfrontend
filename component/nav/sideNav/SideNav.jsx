import React,{useEffect, useState} from 'react'
import {RiPlayListFill} from 'react-icons/ri'
import 'react-toastify/dist/ReactToastify.css';

import {MdOutlineLibraryMusic,MdDeleteOutline} from 'react-icons/md'
import useAuth from '@/hook/useAuth'
import { setModal } from '@/context/userAction';
import SideDrop from './sideDrop';
import { motion , AnimatePresence} from 'framer-motion';
import { handleDel } from '@/manager/API';
import { ToastContainer, toast } from 'react-toastify';
function SideNav() {
  const {userDispatch,yourPlaylistClicked,sideNavClicked,deletePlaylistClicked,thePlaylists,hamState} = useAuth();
  const [isDel,setIsDel] = useState(false)
  const [some,setsome] = useState(false)
  const [isCK,setIsCK] = useState([""])
  const handleClick =  (whichOne) => () =>{
    setsome(!some)
     userDispatch(setModal(sideNavClicked,whichOne,some));
     if(whichOne==="deletePlaylistClicked"){
      setIsDel(!isDel)

     }
  }

  useEffect(()=>{
    if(isCK.length !==0 && isDel === false){
      handleDel(userDispatch,isCK);
      setIsCK([])
    }else if( isCK.length == 0 ){

      if(!yourPlaylistClicked ){
        toast.info("Click on Your Playlist First to see some!",{containerId: 'D',
        autoClose:1500
      });
      }else if(
        // yourPlaylistClicked && 
        thePlaylists.length===0){
        toast.info("No Playlist",{
          containerId: 'P',
          autoClose:1500
      });

      }
      
    } 
  },[isDel])
const [width, setWidth] = useState(window.innerWidth);
const [opened, setOpen] = useState(false);

const breakpoint = 560;
useEffect(() => {
  window.addEventListener("resize", () => setWidth(window.innerWidth));
}, []);
useEffect(()=>{
  if(width<=breakpoint){
    setOpen(true)
  }else{
    setOpen(false)
  }
},[width])
if(width>breakpoint){
  return (
    <div className='sideNav'>
   
    <ul className='ulli'>
        <li ><button className='insideButton' onClick={handleClick(
          "createPlaylistClicked"
        )}>Make Playlist<RiPlayListFill/></button></li>
    </ul>
    <ul >
    <li
    className={
      `${(isDel && thePlaylists.length!==0 && deletePlaylistClicked)   ? "delLI" : "del"}`}
    ><button 
    className={`insideButton ${isDel  ? "insideButtonActive" : ""}`}
     onClick={handleClick("deletePlaylistClicked")}>Delete Playlist<MdDeleteOutline/></button>
     <AnimatePresence>
     {
      (isDel && thePlaylists.length!==0 && deletePlaylistClicked) && 
   
      <SideDrop 
      setIt={setIsCK}
      itIS={isCK}
      />

    }
    </AnimatePresence>

     </li>
</ul>
<ToastContainer enableMultiContainer containerId={'D'}/>
<ToastContainer enableMultiContainer containerId={'P'}/>

<ul
className='ulli'>
<li><button className='insideButton' onClick={handleClick("yourPlaylistClicked")}>Your Playlist<MdOutlineLibraryMusic/></button></li>
</ul>
</div>
   
  )
}
  
}

  


export default SideNav