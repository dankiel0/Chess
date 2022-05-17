import { BrowserRouter, NavLink } from "react-router-dom";

import home from "./img/home.svg";
import play from "./img/play.svg";
import puzzle from "./img/puzzle.svg";
import import_game from "./img/import_game.svg";
import board_editor from "./img/board_editor.svg";

function Home() {
  return (
    <div className="home">
      <div className="navbar">
        <BrowserRouter>
          <ul>
            <li><NavLink to="/home" className="title">
              <img src={home} alt="home" className="icon"/>Home
            </NavLink></li>

            <li><NavLink to="/play">
              <img src={play} alt="play" className="icon"/>Play
            </NavLink></li>

            <li><NavLink to="/puzzle">
              <img src={puzzle} alt="puzzle" className="icon"/>Puzzle
            </NavLink></li>

            <li><NavLink to="/importgame">
              <img src={import_game} alt="import game" className="icon"/>Import Game
            </NavLink></li>

            <li><NavLink to="/boardeditor">
              <img src={board_editor} alt="board editor" className="icon"/>Board Editor
            </NavLink></li>

            <div className="credit">icons from Chess.com</div>
          </ul>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default Home;
