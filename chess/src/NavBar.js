import { Link } from "react-router-dom";

import home from "./img/home.svg";
import play from "./img/play.svg";
import puzzle from "./img/puzzle.svg";
import import_game from "./img/import_game.svg";
import board_editor from "./img/board_editor.svg";
import aim from "./img/aim.svg";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/home" className="title">
          <img src={home} alt="home" className="icon"/>Home
        </Link></li>

        <li><Link to="/play">
          <img src={play} alt="play" className="icon"/>Play
        </Link></li>

        <li><Link to="/puzzles">
          <img src={puzzle} alt="puzzle" className="icon"/>Puzzles
        </Link></li>

        <li><Link to="/importgame">
          <img src={import_game} alt="import game" className="icon"/>Import Game
        </Link></li>

        <li><Link to="/boardeditor">
          <img src={board_editor} alt="board editor" className="icon"/>Board Editor
        </Link></li>

        <li><Link to="/aimtrainer">
          <img src={aim} alt="aim" className="icon"/>Aim Trainer
        </Link></li>

        <div className="credit">icons from Chess.com</div>
      </ul>
    </div>
  );
}

export default NavBar;
