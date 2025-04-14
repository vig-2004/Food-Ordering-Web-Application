import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API_URL}${resId}`);
    const json = await response.json();
    setresInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
