import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurntCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slastring}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const withDiscountOffer = (RestaurntCard) => {
  return ({ resData }) => {
    const discountInfo = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        {discountInfo && (
          <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-lg">
            {`${discountInfo.header} ${discountInfo.subHeader}`}
          </div>
        )}
        <RestaurntCard resData={resData} />
      </div>
    );
  };
};

export default RestaurntCard;
