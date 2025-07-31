import RestaurntCard, { withDiscountOffer } from "./RestaurntCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  //   Local State Variable - Super Powerful Variable
  const [ListOfRestruants, setListOfRestruants] = useState([]);
  const [filteredRestruants, setfilteredRestruants] = useState([]);
  const [searchText, setsearchtext] = useState("");

  const RestaurantCardwithDiscount = withDiscountOffer(RestaurntCard);

  // console.log(ListOfRestruants);
  // useeffect will be called when it renders

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestruants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestruants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Its look like you went Offline ,Please check your internet Connection!!
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (ListOfRestruants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body m-5 p-5">
      <div className="filter flex justify-around m-4 p-4">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-200 rounded-lg"
            onClick={() => {
              const filteredRestruants = ListOfRestruants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestruants(filteredRestruants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="m-4 px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestruants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setfilteredRestruants(filteredList);
            }}
          >
            Top Rated Restraunts
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>&nbsp;
          <input
            className="border border-black p-2 mx-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestruants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardwithDiscount resData={restaurant} />
            ) : (
              <RestaurntCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;