import {React,useState,useRef} from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";

function App() {
  // state

const [songs, setsongs] = useState(data());
const [currentSong, setCurrentsong] = useState(songs[0]);
const [isPlaying, setisPlaying] = useState(false);
const audioRef = useRef(null);
const [LibraryStatus, setLibraryStatus] = useState(false)
const onTimeUpdateHandler= (e) =>{
  const current =  e.target.currentTime;
  const duration =  e.target.duration;
  setSongInfo({...songInfo,currentTime:current,duration:duration});
}
const [songInfo, setSongInfo] = useState({
  currentTime:0,
  duration:0
})
  return (
    <div className="App">
      <Nav LibraryStatus={LibraryStatus} setLibraryStatus={setLibraryStatus}/>
    <Song currentSong={currentSong}></Song>
    <Player setsongs={setsongs} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} setCurrentsong ={setCurrentsong} audioRef={audioRef} isPlaying={isPlaying} setisPlaying={setisPlaying} currentSong={currentSong}></Player>
    <Library LibraryStatus={LibraryStatus} setsongs={setsongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentsong={setCurrentsong}/>
    <audio onTimeUpdate={onTimeUpdateHandler} onLoadedMetadata={onTimeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>

    </div> 
  );
}

export default App;
