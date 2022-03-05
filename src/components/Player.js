import { faPlay,faAngleLeft,faAngleRight,faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { useState } from 'react';

const Player = ({audioRef,currentSong,isPlaying,setisPlaying,songs,songInfo,setSongInfo,setCurrentsong}) => {
        // console.log(songs);
   const  playHandler = () =>{
   if(!isPlaying){
    audioRef.current.play();
    setisPlaying(!isPlaying);
   }else{
    audioRef.current.pause();
    setisPlaying(!isPlaying);

   }    

}
const getTime = (time) => {

    return (
         Math.floor(time/60)+ ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
}

const dragHandler = (e) => {

  audioRef.current.currentTime=e.target.value;
  setSongInfo({...songInfo,currentTime:e.target.value});

}

const handleSong = () => {
    // console.log(songs);
    if(isPlaying){
        const playPromise = audioRef.current.play();
        if(playPromise !== undefined){
            playPromise.then((audio) => {
                audioRef.current.play();
            })
        }
    }
    setCurrentsong(songs[5])
}


    return (
        <div className="player">
            <div className="time-control">
                <p> {getTime(songInfo.currentTime) }</p>
                <input type="range" min="0" max={songInfo.duration || 0 } value={songInfo.currentTime} onChange={dragHandler}/>
                <p>{ getTime(songInfo.duration) }</p>
            </div>
           <div className="play-control">
               <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
              <FontAwesomeIcon onClick={playHandler} className="play" size="2x" icon={ isPlaying ? faPause : faPlay}/>
               <FontAwesomeIcon onClick={handleSong} className="skip-forword" size="2x" icon={faAngleRight}/>
           </div>
        </div>
    );
}

export default Player; 