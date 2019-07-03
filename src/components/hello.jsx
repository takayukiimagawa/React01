import React, { Component } from "react";
import Hero from "./hero";
import About from "./about";
import Lorem from "./lorem";

class Hello extends Component {
  state = {
    active: "false"
  };

  handleClick = () => {
    this.setState({
      active: "true"
    });
  };

  render() {
    const { active } = this.state;
    return (
      <div>
        <div className="header">
          <p>HEADER</p>
          <ul>
            <li onClick={e => this.handleClick(e)}>ABOUT is {active}</li>
            <li>NEWS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <Hero />
        <About />
        <Lorem />
      </div>
    );
  }
}

export default Hello;
