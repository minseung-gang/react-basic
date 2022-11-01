import React, { Component } from "react";
class Parents {
  constructor(name) {
    this.name = name;
  }
}
export default class Child extends Parents {
  constructor(name) {
    super();

    console.log(name);
    console.log(this.name);
  }
}

let gang = new Child("minseung");
