import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  //Subscribing to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex bg-pink-200 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-56 sticky" src={LOGO_URL} />
      </div>
      <div className="flex items-center ml-20 ">
        <ul className="flex m-4">
          <li className="px-4 font-bold text-xl">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={"/cart"}>Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className=" px-4 font-bold text-xl"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
