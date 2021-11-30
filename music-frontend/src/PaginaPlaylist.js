import MusicPlaylist from "./components/Music/playlist";
import { useEffect, useState } from "react";
import React from "react";
import {Link} from "react-router-dom"
function PaginaPlaylist() {
  var axios = require("axios").default;
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/playlist/')
      .then((res) => setPlaylist(res.data));
  }, []);
  console.log(playlist);
  
  return (
    <div>
      <div className="App-header">
      <Link to="/" className="links">
          <img src="/house.png" width='35rem'/>
        </Link>
        <div class="title">Music</div>
        <Link to="/search" className="links">
          <img src="/search.png" width='30rem'/>
        </Link>
          
      </div>
      <div className="App">
        {playlist.map((songs)=>(
          <MusicPlaylist song={songs.song} artist={songs.artist} thumbnail={songs.thumbnail}>{playlist} </MusicPlaylist>
        ))}
      </div>
    </div>
  );
}

export default PaginaPlaylist;