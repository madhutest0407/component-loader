import { Component } from "react";

export class Circle extends Component {
  render() {
    return (
      <svg height="200" width="500">
        <circle cx="200" cy="100" r="100"></circle>
      </svg>
    );
  }
}
