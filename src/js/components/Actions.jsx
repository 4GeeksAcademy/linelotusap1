import React, { useState, useEffect, useRef } from "react";
import Song from "./Song";

const Actions = () => {
  const [songs, setSongs] = useState([]);

  const [selectedSong, setSelectedSong] = useState(0);
  const [playSong, setPlaySong] = useState(false);
  const [songSrc, setSongSrc] = useState("");

  const songRef = useRef(null);

  const togglePlayPause = () => {
    if (!songRef.current) return;
    setPlaySong(!playSong);
  };

  const handleNext = ()=> {
    if (selectedSong < songs.length - 1) {
      setSelectedSong(selectedSong + 1);
    } else {
      setSelectedSong(0);
    }
  }

  const handlePrev = ()=> {
    if (selectedSong > 0) {
      setSelectedSong(selectedSong - 1);
    } else {
      setSelectedSong(songs.length - 1);
    }
  }

  useEffect(() => {
    async function fetchSongs() {
      const resp = await fetch("https://playground.4geeks.com/sound/songs");

      if (!resp.ok) {
        console.error("Failed to fetch songs");
        return;
      }
      const data = await resp.json();

      setSongs(data.songs);
      setSelectedSong(0);
    }
    fetchSongs();
  }, []);

  useEffect(() => {
    if (selectedSong !== null && selectedSong < songs.length) {
      setSongSrc("https://playground.4geeks.com" + songs[selectedSong].url);
    }
  }, [selectedSong]);

  useEffect(() => {
    if (songRef.current && songSrc) {
      songRef.current.load();
      if (playSong) {
        songRef.current.play();
      }
    }
  }, [songSrc]);

  useEffect(() => {
    if (playSong) {
      songRef.current.play();
    } else {
      songRef.current.pause();
    }
  }, [playSong]);

  

  return (
    <div className="actions ">
      <div className="list-group">
        <ul>
          {songs.map((song) => (
            <Song
              key={song.id}
              song={song}
              selectSong={(index) => {
                setSelectedSong(index);
                setPlaySong(true);
              }}
            />
          ))}
        </ul>
      </div>
      {/* BUTTON CONTROLS HERE */}

      <div className="button-controls">
        <button
          className="backwardButton"
          onClick={ handlePrev}
        >
          Back
        </button>

        <button className="PlayPauseButton" onClick={togglePlayPause}>
          {playSong ? "Pause" : "Play"}
        </button>

        <button
          className="forwardButton"
          onClick={handleNext}
        >
          Forward
        </button>
      </div>

      <audio
        ref={songRef}
        preload="auto"
        src={selectedSong !== null && songs[selectedSong] ? songSrc : undefined}
      />
    </div>
  );
};

// return (
// <div className="actions">
/* <a href={songs[selectSong]} class="list-group-item list-group-item-action active" aria-current="true">  </a> */
/* <ol>
        {" "}
        {songs.map((song) => (
          <Song key={song.id} song={song} setSelectedSong={setSelectedSong} />
          // <h1 key={song.id}>{song.name}</h1>
        ))}
      </ol> */

// <div className="list-group">
// {songs.map(song => {
//     const active = song.id === selectedSong;
//     return (
//       <a
//         href="#!"
//         key={song.id}
//         className={`list-group-item list-group-item-action${active ? ' active' : ''}`}
//         aria-current={active ? 'true' : undefined}
//         onClick={() => setSelectedSong(song.id)}
//       >
//         {song.name}
//       </a>
//     );
//   })}
// </div>

/* <div className="songNum"> song number 1</div> */
// </div>
// );
// };

//in order to return HTML element ALWAYS use .jsx file extention. .js or any other file ext does not work

// export default Actions;

export default Actions;
