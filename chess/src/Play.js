import React from "react";

export default class Play extends React.Component {
  componentDidMount() {
    document.title = "Play | Chess";
  }

  render() {
    return (
      <div className="play">
        play page
      </div>
    );
  }
}
