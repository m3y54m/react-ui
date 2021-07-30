import React from "react";
import { Component } from "react";
// import NavBar component from NavBar.jsx file
import NavBar from "./NavBar";
// import MainContent component from MainContent.jsx file
import MainContent from "./MainContent";

export default class App extends Component {
  // Every component must have a method called "render"
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainContent />
      </React.Fragment>
    );
  }
}