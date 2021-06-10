import { Component } from "react";

export class Shape extends Component {
  render() {
    const { shapeType } = this.props;
    // return (
    //   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
    //     <defs>
    //       <circle id="myCircle" cx="0" cy="0" r="5" />

    //       <linearGradient id="myGradient" gradientTransform="rotate(90)">
    //         <stop offset="0%" stop-color="gold" />
    //         <stop offset="20%" stop-color="red" />
    //         <stop offset="20%" stop-color="blue" />
    //       </linearGradient>
    //     </defs>

    //     <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />
    //   </svg>
    // );
    return (
      <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <circle id="myCircle" cx="100" cy="100" r="50" />
          <rect id="myCircle" width="100" height="200"></rect>
          <linearGradient
            id="myGradient"
            x1={"0%"}
            y1={"0%"}
            x2={"100%"}
            y2={"0%"}
          >
            <stop offset={"0%"} stopColor={"gold"}>
              <animate
                attributeName="offset"
                values={`-2; -2; 1`}
                dur="2s"
                keyTimes={"0; 0.70; 1"}
                repeatCount="indefinite"
              />
            </stop>
            <stop offset={"50%"} stopColor={"yellow"}>
              <animate
                attributeName="offset"
                values={`0; 0; 2`}
                dur="2s"
                keyTimes={"0; 0.70; 1"}
                repeatCount="indefinite"
              />
            </stop>
            <stop offset={"100%"} stopColor={"orange"}>
              <animate
                attributeName="offset"
                values={`0; 0; 3`}
                dur="2s"
                keyTimes={"0; 0.90; 1"}
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <use href="#myCircle" x="100" y="100" fill="url('#myGradient')" />
      </svg>
    );
  }
}
