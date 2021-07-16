// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

import React from 'react'
import ReactDOM from 'react-dom'

// Bootstrap CSS
// The following line can be included in your src/index.js or App.js file
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './App';

// Renders NavBar component in the <div> tag with the id of 'root'
// in the index.html file
ReactDOM.render(<NavBar />, document.getElementById('root'));

