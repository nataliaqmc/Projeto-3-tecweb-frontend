import Music from "./components/Music";
import { useEffect, useState } from "react";
import React from "react";
import {Link} from "react-router-dom"

function PaginaInicial() {
  var axios = require("axios").default;
  const [artistSongs, setArtistSongs] = useState([]);

  // Requisição músicas do artista:
  var songs_by_artist_id = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/artists/805/songs',
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  useEffect(() => {
    axios
      .request(songs_by_artist_id)
      .then((res) => setArtistSongs(res.data.response.songs));
  }, []);
  
  
  return (
    <div>
      <div className="App-header">
        <Link to="/playlist" className="links">
          <img src="/music.png" width='35rem'/>
        </Link>
        <div class="title">Music</div>
        <Link to="/search" className="links">
          <img src="/search.png" width='30rem'/>
        </Link>
      </div>
      <div className="App">
        {artistSongs.map((songs)=>(
          <Music title={songs.title} artist_names={songs.artist_names} header_image_thumbnail_url={songs.header_image_thumbnail_url}>{artistSongs} </Music>
        ))}
      </div>
    </div>
  );
}

export default PaginaInicial;