import { BsCloudSnow, BsFire,BsFan ,BsCloudRain} from 'react-icons/bs'
import { MdForest,MdOutlineLocalCafe } from 'react-icons/md'
import {RiThunderstormsFill} from 'react-icons/ri'
import {BiTrain,BiWalk,BiWind} from 'react-icons/bi'
import {CgEditNoise} from 'react-icons/cg'
import {GiNestBirds,GiCommercialAirplane,GiWaves,GiThreeLeaves,GiNightSky,GiRiver,GiSplashyStream} from 'react-icons/gi'
export const data = [
    {
        logo:<BsFire size={110}   color="white"/>,
        name:"Fire" ,
        uri:"/sounds/fire_sound.mp3"
    },
    {
        logo:<BsCloudSnow size={110} color="white" />,
        name:"Snow" ,
        uri:"/sounds/snow_sound.mp3"
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Forest" ,
        uri:"/sounds/forest_sound.mp3"
    }
];

export const notSampledata = [
    ...data,
    {
        logo:<GiNestBirds size={110} color="white"/>,
        name:"Birds" ,
        uri:"/sounds/birds_sound.mp3"
    },
    {
        logo:<GiCommercialAirplane size={110} color="white"/>,
        name:"Airplane" ,
        uri:"/sounds/airplane_sound.mp3"
    },
    {
        logo:<MdOutlineLocalCafe size={110} color="white"/>,
        name:"Cafe" ,
        uri:"/sounds/cafe_sound.mp3"
    },
    {
        logo:<BsFan size={110} color="white"/>,
        name:"Fan" ,
        uri:"/sounds/fan_sound.mp3"
    },
    
    {
        logo:<GiThreeLeaves size={110} color="white"/>,
        name:"Leaves" ,
        uri:"/sounds/leaves_sound.mp3"
    },
    {
        logo:<GiNightSky size={110} color="white"/>,
        name:"Night" ,
        uri:"/sounds/night_sound.mp3"
    },
    {
        logo:<BsCloudRain size={110} color="white"/>,
        name:"Rain" ,
        uri:"/sounds/rain_sound.mp3"
    },
    {
        logo:<GiRiver size={110} color="white"/>,
        name:"River" ,
        uri:"/sounds/river_sound.mp3"
    },
    {
        logo:<GiSplashyStream size={110} color="white"/>,
        name:"Stream" ,
        uri:"/sounds/stream.mp3"
    },
    {
        logo:<RiThunderstormsFill size={110} color="white"/>,
        name:"Thunder" ,
        uri:"/sounds/thunder_sound.mp3"
    },
    {
        logo:<BiTrain size={110} color="white"/>,
        name:"Train" ,
        uri:"/sounds/train_sound.mp3"
    },
    {
        logo:<BiWalk size={110} color="white"/>,
        name:"Walking" ,
        uri:"/sounds/walk_sound.mp3"
    },
    {
        logo:<GiWaves size={110} color="white"/>,
        name:"Waves" ,
        uri:"/sounds/waves_sound.mp3"
    },
    {
        logo:<CgEditNoise size={110} color="white"/>,
        name:"White Noises" ,
        uri:"/sounds/whitenoise_sound.mp3"
    },
    {
        logo:<BiWind size={110} color="white"/>,
        name:"Wind" ,
        uri:"/sounds/wind_sound.mp3"
    }
]