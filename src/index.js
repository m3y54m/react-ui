// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

import React from "react"
import ReactDOM from "react-dom"

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Custom CSS
import "./index.css";

import NavBar from "./App";

// Renders NavBar component in the <div> tag with the id of 'root'
// in the index.html file
ReactDOM.render(
    <NavBar />,
    document.getElementById("root")
);

