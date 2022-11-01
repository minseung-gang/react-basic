import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    /*     this.handleClick = this.handleClick.bind(this); */
  }

  componentDidMount() {
    console.log("didMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("unMount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handleClick = () => {
    alert(this.state.date);
  };
  render() {
    /* console.log("render"); */
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// rcc
