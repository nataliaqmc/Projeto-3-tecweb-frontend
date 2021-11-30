import Music from "./components/Music";
import { useEffect, useState } from "react";
import React from "react";
import {Link} from "react-router-dom"

function PaginaSearch() {
  var axios = require("axios").default;
  const [search, setSearch] = useState([]);
  const [artist, setArtist] = useState("");
  const artistChanged = (event) =>{
    setArtist(event.target.value);
}
  var searchArtist = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/search',
    params: {q: artist},
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': 'e9a145f218msh1c9665147f78266p12c595jsn9c56042d252a'
    }
  };
  const SearchArtist = (event) => {
    event.preventDefault();
    axios
      .request(searchArtist)
      .then((res) => setSearch(res.data.response.hits));
}
  console.log(search); // Devolve os hits do artista 


  
  
  return (
    <div>
      <div className="App-header">
        <Link to="/" className="links">
          <img src="/house.png" width='35rem'/>
        </Link>
        <div class="title">Music</div>
        <Link to="/playlist" className="links">
          <img src="/music.png" width='35rem'/>
        </Link>
      </div>
      <div>
      <form className="form-card" onSubmit={SearchArtist}>
            <input
              className="form-card-title"
              type="text"
              name="titulo"
              placeholder="Type artist's name..."
              value={artist}
              onChange={artistChanged}
            />
            <button className="btn" type="submit">Search</button>
        </form>
      </div>
      <div className="App">
        {search.map((songs)=>(
          <Music title={songs.result.title} artist_names={songs.result.artist_names} header_image_thumbnail_url={songs.result.header_image_thumbnail_url}>{search} </Music>
        ))}
      </div>
    </div>
  );
}

export default PaginaSearch;