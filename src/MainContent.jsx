import React from "react";
import { Component } from "react";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

export default class MainContent extends Component {

  // dynamic content
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        photo: "https://picsum.photos/seed/picsum/50/50",
        addr: {
          city: "New York"
        }
      },
      {
        id: 2,
        name: "Wiscott",
        phone: null,
        photo: "https://picsum.photos/seed/picsum/50/50",
        addr: {
          city: "Old York"
        }
      },
      {
        id: 3,
        name: "Lescott",
        phone: "981-454",
        photo: "https://picsum.photos/seed/picsum/50/50",
        addr: {
          city: "New Mexico"
        }
      },
      {
        id: 4,
        name: "Discott",
        phone: "204-453",
        photo: "https://picsum.photos/seed/picsum/50/50",
        addr: {
          city: "Old Mexico"
        }
      }
    ]
  }

  customerNameStyle = (name) => {
    if (name.startsWith("S")) return { backgroundColor: "green" };
    else if (name.startsWith("L")) return { backgroundColor: "red" };
    else return {};
  }

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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.getCustomerRows()}
          </tbody>
        </Table>
      </div>
    );
  }

  // Method for updating photos
  onTestClick = (cust, index) => {
    console.log(cust);
    console.log(index);

    // Use "index" to update state of the component
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/" + index + "/50/50"
    this.setState({customers: custArr})
  }
  
  // Executes when the user clicks on Refresh button
  // Study about Arrow Function in javascript
  onRefreshClick = () => {
    console.log("Refresh clicked");
    // "this" refers to the MainContent component
    var count = this.state.customersCount + 1;
    this.setState({
      customersCount: count
    })
  }

  // Convert this method a an Arrow Function
  getPhoneToRender = (phone) => {
    if (phone == null) {
      return <span className="bg-warning p-1 rounded">Not Available</span>;
    } else {
      return phone;
    }
  }

  getCustomerRows = () => {
    return (
      this.state.customers.map((cust, index) => {
        return (
          /* Each child in a list should have a unique "key" prop. */
          <tr key={cust.id}>
            <td>{cust.id}</td>
            <td>
              <img src={cust.photo} alt="random" />
              <div>
                <Button variant="secondary"
                  onClick={
                    /* Use Arrow-Function to be able to pass arguments to the onClick event handler method */
                    () => { this.onTestClick(cust, index); }
                  }>
                  Test
                </Button>
              </div>
            </td>
            <td style={this.customerNameStyle(cust.name)}>
              {cust.name}
            </td>
            <td>{this.getPhoneToRender(cust.phone)}</td>
            <td>{cust.addr.city}</td>
          </tr>
        );
      })
    );
  }
}