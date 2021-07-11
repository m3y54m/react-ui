// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

import React from 'react'
import ReactDOM from 'react-dom'

var element = <div>Hello World!</div>

// Renders 'element' in the <div> tag with the id of 'root'
// in the index.html file
ReactDOM.render(element, document.getElementById('root'));

// Print the element in the console of browser
console.log(element);
