import React from "react";

export default class Home extends React.Component {
  componentDidMount() {
    document.title = "Home | Chess";
  }

  render() {
    return (
      <div className="home main">
        home page
      </div>
    );
  }
}
