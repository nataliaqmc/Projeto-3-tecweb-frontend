import "./App.css";
import {Route, Routes} from "react-router-dom" 
import PaginaInicial from "./PaginaInicial";
import PaginaPlaylist from "./PaginaPlaylist";
import PaginaSearch from "./PaginaSearch";
import PaginaArtist from "./PaginaArtist";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>
        <Route path="/playlist" element={<PaginaPlaylist/>}/>
        <Route path="/search" element={<PaginaSearch/>}/>
        <Route path="/artist" element={<PaginaArtist/>}/>
      </Routes>
    </div>
  );
}

export default App;