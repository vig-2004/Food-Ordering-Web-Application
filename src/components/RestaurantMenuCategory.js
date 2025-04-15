import { useState } from "react";
// import RestaurantMenuItemList from "./RestaurantMenuItemList";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import { RiArrowDownSLine } from "react-icons/ri";

import ItemList from "./ItemList";

const RestaurantMenuCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Category Header */}
      <div className="w-6/12 mx-auto  my-4 shadow-lg bg-gray-50 ">
        <div
          className="flex justify-between cursor-pointer py-4"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{`${data?.title.slice(0, 40)} (${
            data?.itemCards?.length
          })`}</span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
