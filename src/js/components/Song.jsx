import React from "react";

const Song =({song, setSelectedSong}) => {
    return(
        <li className= "song" onClick={() => setSelectedSong(song.id -1)}>
        {song.name}
        
        </li>
    )

}

export default Song