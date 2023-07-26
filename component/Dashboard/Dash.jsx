'use-client'
import React , {useState,useEffect} from 'react'
import { notSampledata } from '@/util/SData'
import Sound from '../soundS/Sound'
import useAuth from '@/hook/useAuth'
import { setPlaylist } from '@/context/userAction';
import { ToastContainer, toast } from 'react-toastify';
import { handleHamState } from '@/manager/API'


function Dash() {
  const {userDispatch,createPlaylistClicked,sideNavClicked,isHam} = useAuth();
  const [currentSoundIndex, setCurrentSoundIndex] = useState([])
  const [playingSounds, setPlayingSounds] = useState({})
  const [phir,setphir] = useState(false)
const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setPlayingSounds(
      currentSoundIndex.reduce(
        (newPlayingSounds, audioIndex) => {
          newPlayingSounds[audioIndex] = true
          return newPlayingSounds
        },
        {}
      )
    )
  }, [currentSoundIndex])
  useEffect(()=>{
    if(createPlaylistClicked && Object.keys(playingSounds).length === 0 && !phir){
      toast.info("Mix and play some sounds...");
    }
    setphir(!phir)


  },[sideNavClicked,playingSounds])
  const breakpoint = 560;
useEffect(() => {
  window.addEventListener("resize", () => setWidth(window.innerWidth));
}, []);
useEffect(()=>{
  if(width>breakpoint){
      handleHamState(false,userDispatch);
  }
},[width])
  useEffect(()=>{
    userDispatch(setPlaylist(playingSounds)); 
  },[playingSounds]) // do some condition only on modal save click

  return (
    <div className={`${isHam ? "wholeDash zi": "wholeDash"}`}>

    <div className='dashCardContainer'>

      {
        notSampledata.map((el,i)=>{
            return (
              <Sound 
              key = {i}
              keyy={i}
              {...el}
              src={el.uri}
              title={el.name}
              logo={el.logo}
              isActive={currentSoundIndex.includes(i)}
              isPlaying={playingSounds[i]}  //for true or false
              onPlay={() =>
               setPlayingSounds({ ...playingSounds, [i]: true })
              }
              onPause={
                () => {
                const newPlayingSounds = { ...playingSounds }
                delete newPlayingSounds[i]
                setPlayingSounds(newPlayingSounds)
              }
            }
              
              />
            )
        })
      }

    </div>
    <ToastContainer />


    </div>

  )
}

export default Dash