import React, { Component } from "react";
import Hero from "./hero";
import About from "./about";

class Hello extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="header">
          <p>HEADER</p>
          <ul>
            <li>ABOUT</li>
            <li>NEWS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <Hero />
        <About />
      </div>
    );
  }
}

export default Hello;
