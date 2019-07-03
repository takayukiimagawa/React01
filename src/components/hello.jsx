import React, { Component } from "react";
import Hero from "./hero";
import About from "./about";

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
      </div>
    );
  }
}

export default Hello;
