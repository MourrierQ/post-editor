import React, { Component } from "react";

import "./App.css";

import PostBuilder from "./containers/PostBuilder/PostBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostBuilder />
      </div>
    );
  }
}

export default App;
