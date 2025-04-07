import RestaurntCard from "./RestaurntCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //   Local State Variable - Super Powerful Variable
  const [ListOfRestruants, setListOfRestruants] = useState([resList]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = ListOfRestruants.filter(
              (res) => res.rating > 4
            );
            setListOfRestruants(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {ListOfRestruants.map((restaurant) => (
          <RestaurntCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
