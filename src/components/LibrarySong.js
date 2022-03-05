import React from 'react';

const LibrarySong = ({currentSong,setCurrentsong,songs,id,audioRef,isPlaying,setsongs}) => {
    const selectSongHandler = () =>{
        const selectedSong = songs.filter((state) => state.id === id);
        setCurrentsong(selectedSong[0]);
       const NewSongs =  songs.map((song) =>{
            if(song.id === id){
                // song.active = true;
                return {
                    ...song,active:true,
                }
            }else{
                // song.active =false;
                return{
                    ...song,active:false,
                }

            }
        });
        setsongs(NewSongs);

        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    }
    return (
        <div className={`library-song ${currentSong.active ?'selected':""}`} onClick={selectSongHandler}>
            <img alt={currentSong.name} src={currentSong.cover_image}/>
            <div className="song-description">
            <h3>{currentSong.name}</h3>
            <h4>{currentSong.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;
