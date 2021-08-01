import React from "react";
import { Component } from "react";

export default class Priduct extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        Product #{this.props.id}
      </div>
    );
  }
}