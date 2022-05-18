import React from "react";

export default class BoardEditor extends React.Component {
  componentDidMount() {
    document.title = "Board Editor | Chess";
  }

  render() {
    return (
      <div className="boardeditor">
        board editor page
      </div>
    );
  }
}
