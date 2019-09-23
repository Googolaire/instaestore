import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
//Components
// Styles

import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
//let stock = "https://my-json-server.typicode.com/googolaire/instaestore";
export default class Products extends Component {
  render() {
    let bikes = [];
    if (window.location.host === "1jvrt.csb.app") {
      bikes = [
        {
          id: 1,
          name: "Adult Male Bike",
          price: 20.5,
          image: "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
          product_type: "bike"
        },
        {
          id: 2,
          name: "Adult Female Bike",
          price: 20.5,
          image:
            "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
          product_type: "bike"
        },
        {
          id: 3,
          name: "Kids Unisex Bike",
          price: 12.75,
          image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
          product_type: "bike"
        },
        {
          id: 4,
          name: "Adult Unisex Helmet",
          price: 4.0,
          image:
            "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
          product_type: "accessory"
        },
        {
          id: 5,
          name: "Kids Unisex Helmet",
          price: 3.5,
          image:
            "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
          product_type: "accessory"
        },
        {
          id: 6,
          name: "Insurance",
          price: 9.99,
          image: "http://via.placeholder.com/250x250?text=Insurance",
          product_type: "addon"
        }
      ];
    } else {
      return (
        <div>
          Tell The store owner you want to order online and pickup in store{" "}
        </div>
      );
    }
    return (
      <div className="App">
        <div className="contrainer">
          <div className="row">
            {bikes.map(bike => (
              <div className="col-md-4">
                <div className="card m-2">
                  <img
                    className="card-img-top"
                    src={bike.image}
                    alt="aaaaaaaa"
                  />
                  <div classme="card-body">
                    <h4 className="card-title">{bike.name}</h4>
                    <p className="card-text">words</p>
                    <button className="btn btn-outline-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
