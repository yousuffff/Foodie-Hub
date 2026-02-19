import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user">
        <h2>USER INFO</h2>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}
export default UserClass;
