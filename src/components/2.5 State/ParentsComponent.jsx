import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentsComponent extends Component {
  constructor(name) {
    super(name);
    this.name = name;
  }
  render() {
    return (
      <div>
        <ChildComponent />
      </div>
    );
  }
}
