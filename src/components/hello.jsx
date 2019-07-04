import React, { Component } from "react";
import Hero from "./hero";
import About from "./about";
import Lorem from "./lorem";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "false",
      info: "Lorem Ipsum"
    };
  }

  render() {
    const { active, info } = this.state;
    return (
      <div>
        <div className="header">
          <p>HEADER</p>
          <ul>
            <li
              onClick={() => this.setState({ active: !active })}
              style={{ color: active ? "#ff5959" : "#111" }}
            >
              ABOUT
            </li>
            <li>NEWS</li>
            <li>CONTACT</li>
            <li>{info}</li>
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
