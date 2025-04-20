import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-6 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {` ${"₹"}${
                  item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100
                }`}
              </span>
            </div>
            <p className="text-xs">
              <span>{item.card.info.description}</span>
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-1.5 mx-17 rounded-lg bg-black text-white shadow-lg md-0 cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
