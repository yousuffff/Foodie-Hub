import React from "react";
import User from "./UserClass";

class AboutUs extends React.Component {
  constructor() {
    super();
    console.log("constructor called");
  }
  componentDidMount() {
    console.log("Component Mounted");

    this.timer = setInterval(() => {
      console.log("this is set interval ");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h2>About me</h2>
        <h2> kya karega jaan ke</h2>
        <div>
          <User name={"Mohd Yousuf"} location={"Lucknow"} />
        </div>
      </div>
    );
  }
}

export default AboutUs;
