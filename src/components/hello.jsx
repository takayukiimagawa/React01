import React, { Component } from "react";
import Hero from "./hero";
import About from "./about";

class Hello extends Component {
  state = {
    links: ["ABOUT", "NEWS", "CONTACT"]
  };
  render() {
    const { links } = this.state;
    return (
      <div>
        <div className="header">
          <p>HEADER</p>
          <ul>
            <li>{links[0]}</li>
            <li>{links[1]}</li>
            <li>{links[2]}</li>
          </ul>
        </div>
        <Hero />
        <About />
      </div>
    );
  }
}

export default Hello;
