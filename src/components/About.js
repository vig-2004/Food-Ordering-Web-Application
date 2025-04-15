import User from "./User";
import Userclass from "./Userclass";
import React from "react";
import User from "./User";
import User from "./Userclass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    // console.log("parent constructor called");
    super(props);
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }
  render() {
    // console.log("parent render called");
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h2>This is about our Restraunt website</h2>
        {/* <User
          name={"vignesh (from function)"}
          location={"Bheemgal (from function)"}
        /> */}
        <br />
        <Userclass
          name={"vignesh (from class)"}
          location={"Bheemgal (from class)"}
        />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is about our Restraunt website</h2>
//       <User
//         name={"vignesh (from function)"}
//         location={"Bheemgal (from function)"}
//       />
//       <br />
//       <Userclass
//         name={"vignesh (from class)"}
//         location={"Bheemgal (from class)"}
//       />
//     </div>
//   );
// };

export default About;
