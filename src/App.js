import React, { Component } from "react";

import "./App.css";

import Layout from "./Layout/Layout";
import Header from "./Layout/Header/Header";

import PostBuilder from "./containers/PostBuilder/PostBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header />
          <PostBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
