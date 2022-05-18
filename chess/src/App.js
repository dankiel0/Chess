import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Play from "./Play";
import Puzzles from "./Puzzles";
import ImportGame from "./ImportGame";
import BoardEditor from "./BoardEditor";
import AimTrainer from "./AimTrainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/home" element={ <Home /> }/>
        <Route path="/play" element={ <Play /> }/>
        <Route path="/puzzles" element={ <Puzzles /> }/>
        <Route path="/importgame" element={ <ImportGame /> }/>
        <Route path="/boardeditor" element={ <BoardEditor /> }/>
        <Route path="/aimtrainer" element={ <AimTrainer /> }/>
        <Route path="/" element={<Navigate to ="/home" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
