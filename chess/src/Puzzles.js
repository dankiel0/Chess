import React from "react";

export default class Puzzles extends React.Component {
  componentDidMount() {
    document.title = "Puzzles | Chess";
  }

  render() {
    return (
      <div className="puzzles">
        puzzles page
      </div>
    );
  }
}
