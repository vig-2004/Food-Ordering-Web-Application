import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    // console.log("child1 constructor called");
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    // console.log("child1 component did mount");
    const data = await fetch("https://api.github.com/users/vig-2004");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }
  componentDidUpdate() {
    // console.log("component updated");
  }
  componentWillUnmount() {
    // console.log("component will unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log("child1 render called");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @airforce</h4>
      </div>
    );
  }
}
export default Userclass;

/***
 *
 * ----Mounting-----
 *
 * Constructor(Dummy)
 * Render(Dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Calls>
 *      <this.setState>-->State variable is updated
 *
 * -----UPDATE-----
 *
 *      render(API date)
 *      <HTML (new APi Date)>
 *      ComponentDidUpdate
 *
 *
 *
 */
