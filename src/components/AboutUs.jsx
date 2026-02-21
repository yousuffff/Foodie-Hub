import React from "react";
import User from "./UserClass";

class AboutUs extends React.Component {
  constructo(){
    
  }
  render() {
    return (
      <div>
        <h2>About me</h2>
        <h2> kya karega jaan ke</h2>
        <div>
          <User name={"Mohd Yousuf"} location={"Lucknow"} />
          <User name={"Mohd Yousuf"} location={"Lucknow"} />
          <User name={"Mohd Yousuf"} location={"Lucknow"} />
        </div>
      </div>
    );
  }
}

export default AboutUs;
