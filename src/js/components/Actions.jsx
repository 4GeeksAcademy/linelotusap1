import React, { useState, useEffect } from "react";
import Song from "./Song";


<Song/>
const Actions = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);


  //   const selectedSong = songs.find(s => s.id === selectedSongId);
  // const selectedIndex = songs.findIndex(s => s.id === selectedSongId);

  const getSongs = async () => {
    const response = await fetch("https://playground.4geeks.com/sound/songs", {
      method: "GET",
    });
    const data = await response.json();
    setSongs(data.songs);
    console.log(data.songs);
  };
  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="actions">
      {/* <a href={songs[selectSong]} class="list-group-item list-group-item-action active" aria-current="true">  </a> */}
      {/* <ol>
        {" "}
        {songs.map((song) => (
          <Song key={song.id} song={song} setSelectedSong={setSelectedSong} />
          // <h1 key={song.id}>{song.name}</h1>
        ))}
      </ol> */}

      <div className="list-group">
  {songs.map(song => {
    const active = song.id === selectedSong;
    return (
      <a
        href="#!"
        key={song.id}
        className={`list-group-item list-group-item-action${active ? ' active' : ''}`}
        aria-current={active ? 'true' : undefined}
        onClick={() => setSelectedSong(song.id)}
      >
        {song.name}
      </a>
    );
  })}
</div>

    {/* <div className="songNum"> song number 1</div> */}
    </div>
  );
};

//in order to return HTML element ALWAYS use .jsx file extention. .js or any other file ext does not work

export default Actions;
