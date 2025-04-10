import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]); // Ensures data reloads when resId changes

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_API_URL}${resId}`);
      const json = await response.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, locality } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const cards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{locality}</h3>
      <p>{cuisines?.join(", ")}</p>
      <h2>Menu</h2>

      {itemCards.length ? (
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
