import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child Mounted");
  }
  componentDidMount() {
    console.log("child did mount");
  }
  render() {
    console.log("child render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user">
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click ME
        </button>
        <h2>count: {count}</h2>
        <h2>USER INFO</h2>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}
export default UserClass;
