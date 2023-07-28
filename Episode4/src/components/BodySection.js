import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import restList from "../utils/mockData";
import { FaSearch } from "react-icons/fa";

const BodySection = () => {
  const [listofRestaurants, setListofRestaurants] = useState(restList);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="body-container">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (filteredRestaurants) =>
                filteredRestaurants.data.data.avgRating > 4
            );
            setListofRestaurants(filteredList);
          }}
        >
          Filter Top Restaurants
        </button>
      </div>
      <div className="search-bar-container">
        <form>
          <input className="search-bar" type="search" name="search-bar" />
        </form>
        <button>
          <FaSearch className="search-icon" />
        </button>
      </div>

      <div className="rest-container">
        {listofRestaurants.map((restaurantsparam) => (
          <RestaurantCard
            key={restaurantsparam.data.data.id}
            restData={restaurantsparam}
          />
        ))}
      </div>
    </div>
  );
};

export default BodySection;
