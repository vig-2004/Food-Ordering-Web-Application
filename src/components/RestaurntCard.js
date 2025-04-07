import { URL } from "../utils/constants";
const RestaurntCard = (props) => {
  const { resData } = props;
  const { name, typeOfFood, rating, postcode } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={URL} alt="res-logo" />
      <h3>Restruant : {name}</h3>
      <h4>FoodType : {typeOfFood}</h4>
      <h4>Rating : {rating}</h4>
      <h4>PostalCode : {postcode}</h4>
    </div>
  );
};

export default RestaurntCard;
