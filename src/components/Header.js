import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-56 sticky" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 ">
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
          <li className="px-4 font-bold text-xl">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
