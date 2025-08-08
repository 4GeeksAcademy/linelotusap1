import React from "react";

const Song =({song, selectSong}) => {
    return(
        <ul className= "song border border-dark" onClick={() => selectSong(song.id -1)}>
            <div>
        <h1>{song.name}</h1> </div>
        
        </ul>
    )

}

export default Song;