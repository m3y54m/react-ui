import React from "react";
import { Component } from "react";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default class MainContent extends Component {

  // dynamic content
  state = { pageTitle: "Customers", customersCount: 5 }

  render() {
    return (
      <div>
        {/* Use Bootstrap predefined classes for styling */}
        <h3 className="border-bottom m-1 p-1">
          {/* Print out the dynamic content using expressions */}
          {this.state.pageTitle}
          <Badge className="m-2 bg-danger rounded-pill">
            {this.state.customersCount}
          </Badge>
          <Button variant="primary" onClick={this.onRefreshClick}>
            Refresh
          </Button>
        </h3>
      </div>
    );
  }

  // Executes when the user clicks on Refresh button
  onRefreshClick() {
    console.log("Refresh clicked");
  }
}