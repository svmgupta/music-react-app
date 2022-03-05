import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs,setCurrentsong,audioRef,isPlaying,setsongs,LibraryStatus}) => {
        return (
        <div className={`library ${LibraryStatus ? 'active-library':""}`}>
            <h2>Library</h2>
            <div className="library-songs">
               {songs.map((song) => <LibrarySong songs ={ songs } isPlaying={isPlaying} setsongs={setsongs} audioRef={audioRef} setCurrentsong={setCurrentsong} currentSong={song} id={song.id} key={song.id}/>)} 
            </div>
        </div>
    );
}

export default Library;
