import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// CSS
import "./styles.css";
//Components
import Home from "./components/home";
import Inventory from "./components/inventory";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/inventory" component={Inventory} />
        </div>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
