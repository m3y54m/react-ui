import React from "react";
import { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: 1,
        productName: "iPhone",
        price: 8900,
        quantity: 0
      },
      {
        id: 2,
        productName: "Mi 11",
        price: 4500,
        quantity: 0
      },
      {
        id: 3,
        productName: "Galaxy 7",
        price: 1200,
        quantity: 0
      },
      {
        id: 4,
        productName: "MacBook",
        price: 20000,
        quantity: 0
      },
    ]
  }

  render() {
    return (
      <div>
        <h4>Shopping Cart!</h4>
        <div>
          {this.state.products.map((prod) => {
            return <Product key={prod.id} />
          })
          }
        </div>
      </div>
    );
  }


}