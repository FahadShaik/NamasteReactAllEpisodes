import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const {
    cloudinaryImageId,
    name,
    costForTwo,
    cuisines,
    avgRating,
    maxDeliveryTime,
  } = restData?.data.data;
  return (
    <div className="rest-card">
      <img
        className="food-pic"
        alt="food-img"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{costForTwo / 100} Rupees</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{maxDeliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
