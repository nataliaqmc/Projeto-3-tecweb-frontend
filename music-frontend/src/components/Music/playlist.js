import React from "react";
import "./index.css";

export default function MusicPlaylist(props) {
  function refreshPage(){ 
    window.location.reload(); 
}
  function deleteFromPlaylist () {
    var axios = require("axios").default;
    const deletar = (event) => {
      event.preventDefault();
      axios.delete('http://127.0.0.1:8000/playlist/delete/'+props.song+"/"+props.artist+"/", {'song':props.title, 'artist':props.artist_names, 'thumbnail':props.header_image_thumbnail_url})
    }
    return deletar
  }

  return (
    <div className="card">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={props.thumbnail} height="100%" width="100%" />
          </div>
          <div class="flip-card-back">
            <div class="x">
              <img onClick={deleteFromPlaylist()} onClickCapture={refreshPage} className="delete-button" src="/x.png" width='20rem'/>
            </div>
            <p className="card-title">{props.song}</p>
            <p className="card-content">{props.artist}</p>
          </div>
        </div>
      </div>
    </div>
  );
}