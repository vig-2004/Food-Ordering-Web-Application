import RestaurntCard from "./RestaurntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //   Local State Variable - Super Powerful Variable
  const [ListOfRestruants, setListOfRestruants] = useState([]);
  const [filteredRestruants, setfilteredRestruants] = useState([]);
  const [searchText, setsearchtext] = useState("");

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

  return ListOfRestruants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestruants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurntCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
