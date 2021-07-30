import { Component } from "react";

export default class MainContent extends Component {

  // dynamic content
  state = { appTitle: "Hello Buddy!" }

  render() {
    return (
      <div>
        {/* Use Bootstrap predefined classes for styling */}
        <h4 className="border-bottom m-1 p-1">
          {/* Print out the dynamic content using expressions */}
          {this.state.appTitle}
        </h4>
      </div>
    );
  }
}