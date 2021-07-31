import React from "react";
import { Component } from "react";
// import NavBar component from NavBar.jsx file
import NavBar from "./NavBar";
// import ShoppingCart component from ShoppingCart.jsx file
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  // Every component must have a method called "render"
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}